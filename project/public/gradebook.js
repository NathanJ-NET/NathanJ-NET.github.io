function fetchGradeData() {
  console.log("Fetching grade data...");

  let xhr = new XMLHttpRequest();
  let apiRoute = "/api/grades";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        populateGradebook(data);
      } else {
        console.error(`Could not get grades.\nStatus: ${xhr.status}`);
      }
    }
  };

  xhr.open("get", apiRoute, true);
  xhr.send();
}

function populateGradebook(data) {
  console.log("Populating gradebook with data:", data);

  let tableElm = document.getElementById("gradebook").getElementsByTagName("tbody")[0];

  if (!tableElm) {
    console.error("Gradebook table body not found!");
    return;
  }

  data.forEach(function (assignment) {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.appendChild(document.createTextNode(`${assignment.last_name}, ${assignment.first_name}`));

    let emailCell = document.createElement("td");
    emailCell.appendChild(document.createTextNode(assignment.email));

    let titleCell = document.createElement("td");
    titleCell.appendChild(document.createTextNode(assignment.title));

    let descCell = document.createElement("td");
    descCell.appendChild(document.createTextNode(assignment.description));

    let dueDateCell = document.createElement("td");
    dueDateCell.appendChild(document.createTextNode(assignment.due_date));

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(titleCell);
    row.appendChild(descCell);
    row.appendChild(dueDateCell);

    tableElm.appendChild(row);
  });
}

function fetchGradeData() {
  console.log("Fetching grade data...");
  fetch("http://localhost:3000/api/grades")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => populateGradebook(data))
    .catch(err => {
      console.error("Could not get grades.");
      console.error("Status:", err.message);
    });
}

fetchGradeData();


   