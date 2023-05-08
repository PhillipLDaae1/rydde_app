const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Lager en referanse til databasen
let db = firebase.firestore();


const usersSelect = document.getElementById("users");
const taskSelect = document.getElementById("tasks");
const regButton = document.getElementById("btnRegister");
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const divReport = document.getElementById("detail-report");

const users = new Map();
const tasks = new Map();
const familyPoints = new Map();
const log = [];

main();

async function main() {
  const data = await fetchData()
  populateFamilyMembers(users);
  populateTasks(tasks);
  table = generateTable(familyPoints );
  divReport.innerHTML= "";
  divReport.appendChild(table);
}

// Henter HTML-elementer
async function fetchData() {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
   
    // Fetch family members
    const usersSnapshot = await db.collection('users').get();
      usersSnapshot.forEach((doc) => {
      users.set(doc.data().id, doc.data().name);
      familyPoints.set(doc.data().name, 0);
    });
  
    // Fetch chores
    const taskSnapshot = await db.collection('tasks').get();
    taskSnapshot.forEach((doc) => {
      tasks.set(doc.data().id, { name: doc.data().name, points: doc.data().points });
    });

    
  
    // Fetch done chores
    const logSnapshot = await db.collection('log')
      //.where('date', '>=', new Date(currentYear, currentMonth - 1, 1))
      //.where('date', '<', new Date(currentYear, currentMonth, 1))
      .get();
  
      
      logSnapshot.forEach((doc) => {
        console.log(doc.data());
        const idUser = parseInt(doc.data().idUser);
        const idTask = parseInt(doc.data().idTask);
        const date = doc.data().date;
        const taskPoints = tasks.get(idTask).points;
        const taskName = tasks.get(idTask).name;
        const user = users.get(idUser);
        familyPoints.set(user, familyPoints.get(user) + taskPoints);
        log.push([['name', user],['date', date],['task', taskName], ['points',taskPoints]]);
    });
    
  
    return { users, tasks, familyPoints, log };
  }
  

  


  function populateFamilyMembers(users) {
    usersSelect.innerHTML = "";
    users.forEach((name, id) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = name;
      usersSelect.appendChild(option);
    });
}

function populateTasks(tasks) {
    taskSelect.innerHTML = "";
    tasks.forEach(({ name, points }, id) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = `${name} (${points} pts)`;
      taskSelect.appendChild(option);
    });
}


regButton.addEventListener("click", async () => {
  const selectedUserId = parseInt(usersSelect.value);
  const selectedTaskId = parseInt(taskSelect.value);
  const user = users.get(selectedUserId);
  const taskPoints = tasks.get(selectedTaskId).points
  const taskName = tasks.get(selectedTaskId).name
  const dateTime = new Date().toISOString();
  familyPoints.set(user, familyPoints.get(user) + taskPoints);
  log.push([['name', user],['date', dateTime],['task', taskName], ['points',taskPoints]]);

  
  
  try {
    await db.collection("done").add({
      idUser: selectedUserId,
      idTask: selectedTaskId,
      date: dateTime    
  });

    console.log("Chore added successfully");
    table = generateTable(familyPoints );
    divReport.innerHTML= "";
    divReport.appendChild(table);

  } catch (error) {
    console.error("Error adding chore:", error);
  }
});



function generateTable(familyPoints) {
    const table = document.createElement('table');
    let tableHtml= `<thead> <tr> \             
          <th>Family Member</th> \
          <th>Points</th> \
          </tr> \
            </thead> \
              <tbody>`;

              for (const [name, points] of familyPoints) {
                tableHtml += '<tr>';
                tableHtml += `<td>${name}</td>`;
                tableHtml += `<td>${points}</td>`;
                tableHtml += '</tr>';
              }

    table.innerHTML = tableHtml + '</tbody>';
    return table;
  }
  