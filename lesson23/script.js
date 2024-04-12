var persons = [];

function addNewUser() {
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var address = document.getElementById('address').value;

  var newUser = {
    firstName: firstName,
    lastName: lastName,
    address: address,
  };
  persons.push(newUser);

  displayUsers();
}

function displayUsers() {

  var table = document.getElementById('table');
  table.innerHTML = "<tr><th> First Name </th><th> Last Name </th><th> Address </th></tr>";

  for (var i = 0; i < persons.length; i++) {
    var user = persons[i];
    var row = table.insertRow();

    row.insertCell().innerText = user.firstName;
    row.insertCell().innerText = user.lastName;
    row.insertCell().innerText = user.address;
  }
}

function deleteUser() {
  var table = document.getElementById('table');
  var rowCount = table.rows.length;

  if (rowCount > 1) {
    table.deleteRow(rowCount - 1);
  } else {
    alert("No entries to remove!");
  }
}