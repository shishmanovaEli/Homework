document.addEventListener('DOMContentLoaded', function () {
   var newUser = JSON.parse(localStorage.getItem('newUser'));
   var tableBody = document.getElementById('data-output');

   if (newUser) {
       addUserToTable(newUser, tableBody);
   }
});

function addUserToTable(user, tableBody) {
   var newRow = document.createElement('tr');

   Object.keys(user).forEach(function (key) {
       var cell = document.createElement('td');
       if (key === 'image') {
           var img = document.createElement('img');
           img.src = user[key];
           img.width = 180;
           img.height = 150;
           img.style.objectFit = 'cover';
           cell.appendChild(img);
       } else {
           cell.textContent = user[key];
       }
       newRow.appendChild(cell);
   });

   newRow.addEventListener('click', function() {
      editUser(user);
  });
  
    tableBody.appendChild(newRow);
}

function addNewIntern() {
    window.location.href = 'ADD/AddEdit.html';
}

function editUser(user) {
   localStorage.setItem('editUser', JSON.stringify(user));
   window.location.href = 'ADD/AddEdit.html';
}
