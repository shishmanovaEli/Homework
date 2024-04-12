document.addEventListener('DOMContentLoaded', function () {
   var imgBox = document.getElementById('imgBox');
   var myFile = document.getElementById('myFile');
   var fileInput = document.getElementById('fileInput');
   var addBtn = document.getElementById('addBtn');
   var cancelBtn = document.getElementById('cancelBtn');
   var internNameInput = document.getElementById('internName');
   var phoneInput = document.getElementById('phone');
   var emailInput = document.getElementById('email');
   var startDateElement = document.getElementById('startDate');
   var endDateElement = document.getElementById('endDate');
   var task1ResultInput = document.getElementById('task1Result');
   var task2ResultInput = document.getElementById('task2Result');
   var daysLeftInput = document.getElementById('daysLeft');

   function User(name, image, phone, email, startDate, endDate, daysLeft, task1, task2, department, mentor, task1Result, task2Result, attachedFiles) {
      this.name = name;
      this.image = image;
      this.phone = phone;
      this.email = email;
      this.startDate = startDate;
      this.endDate = endDate;
      this.daysLeft = daysLeft;
      this.task1 = task1 || '';
      this.task2 = task2 || '';
      this.department = department || '';
      this.mentor = mentor || '';
      this.task1Result = task1Result || 0;
      this.task2Result = task2Result || 0;
      this.attachedFiles = attachedFiles || 0;
   }

   function addNewUser(task1Select, task2Select) {
      var name = internNameInput.value;
      var image = localStorage.getItem('myImage');
      var phone = phoneInput.value;
      var email = emailInput.value;
      var startDate = startDateElement.value;
      var endDate = endDateElement.value;
      var daysLeft = daysLeftInput.value || 0;
      var task1 = task1Select.options[task1Select.selectedIndex].value || '';
      var task2 = task2Select.options[task2Select.selectedIndex].value || '';
      var department = departmentSelect.options[departmentSelect.selectedIndex].value || '';
      var mentor = mentorSelect.options[mentorSelect.selectedIndex].value || '';
      var task1Result = task1ResultInput.value;
      var task2Result = task2ResultInput.value;
      var attachedFiles = JSON.parse(localStorage.getItem('attachedFiles'));
      var isNameValid = name.trim() !== '';
      var isPhoneValid = /^088|089|087\d{7}$/.test(phone);
      var isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      var isTask1ResultValid = isValidResult(task1Result);
      var isTask2ResultValid = isValidResult(task2Result);

      if (isNameValid && isPhoneValid && isEmailValid && isTask1ResultValid && isTask2ResultValid) {
         var newUser = new User(name, image, phone, email, startDate, endDate, daysLeft, task1, task2, department, mentor, task1Result, task2Result, attachedFiles);
         localStorage.setItem('newUser', JSON.stringify(newUser));
         window.location.href = '../MainList.html';
      } else {
         if (!isNameValid) {
            internNameInput.classList.add('input-1');
         } else {
            internNameInput.classList.remove('input-1');
         }
         if (!isPhoneValid || !isEmailValid || !isTask1ResultValid || !isTask2ResultValid) {
            phoneInput.classList.add('input-2');
            emailInput.classList.add('input-2');
            task1ResultInput.classList.add('input-2');
            task2ResultInput.classList.add('input-2');
         } else {
            phoneInput.classList.remove('input-2');
            emailInput.classList.remove('input-2');
            task1ResultInput.classList.remove('input-2');
            task2ResultInput.classList.remove('input-2');
         }
      }
   }

   if (cancelBtn) {
      cancelBtn.addEventListener('click', function () {
         window.location.href = '../MainList.html';
      });
   }

   myFile.addEventListener('change', function () {
      const file = myFile.files[0];

      if (file && file.type.startsWith('image/jpeg')) {
         var reader = new FileReader();

         reader.onload = function () {
            img = document.createElement('img');
            img.src = reader.result;
            img.style.width = '200px';
            img.style.height = '200px';
            imgBox.innerHTML = '';
            imgBox.appendChild(img);
            localStorage.setItem('myImage', reader.result);
         };
         reader.readAsDataURL(file);
      } else {
         alert('Моля, изберете JPEG файл.');
         myFile.value = '';
      }
   });

   fileInput.addEventListener('change', function () {
      const files = fileInput.files;
      var fileArray = [];
      var isValidFiles = true;
      for (var i = 0; i < files.length; i++) {
         if (files[i].type.startsWith('image/jpeg')) {
            var reader = new FileReader();
            reader.onload = function (event) {
               fileArray.push(event.target.result);

               if (fileArray.length === files.length) {
                  var attachedFiles = fileArray.length;
                  localStorage.setItem('attachedFiles', attachedFiles);
                  localStorage.setItem('fileArray', JSON.stringify(fileArray));
               }
            };
            reader.readAsDataURL(files[i]);
         } else {
            isValidFiles = false;
         }
      }

      if (!isValidFiles) {
         alert('Моля, изберете само JPEG файлове.');
         fileInput.value = '';
      }
   });

   startDateElement.addEventListener('change', function () {
      calculateDifference();
   });

   endDateElement.addEventListener('change', function () {
      calculateDifference();
   });

   function calculateDifference() {
      var startDate = new Date(startDateElement.value);
      var endDate = new Date(endDateElement.value);
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
         var difference = endDate.getTime() - startDate.getTime();
         var daysLeft = Math.round(difference / (1000 * 3600 * 24));
         daysLeftInput.value = daysLeft;
      } else {
         daysLeftInput.value = '';
      }
   }

   function isValidResult(result) {
      return !isNaN(result) && result >= 0 && result <= 100;
   }


   document.addEventListener('DOMContentLoaded', function () {
      var editUser = JSON.parse(localStorage.getItem('editUser'));
      var saveBtn = document.getElementById('saveBtn');
      var deleteBtn = document.getElementById('deleteBtn');

      if (editUser) {
         var editIndex = parseInt(localStorage.getItem('editIndex'));
         document.getElementById('internName').value = editUser.name;
         document.getElementById('phone').value = editUser.phone;
         document.getElementById('email').value = editUser.email;
         document.getElementById('startDate').value = editUser.startDate;
         document.getElementById('endDate').value = editUser.endDate;
         document.getElementById('daysLeft').value = editUser.daysLeft;
         document.getElementById('task1').value = editUser.task1;
         document.getElementById('task2').value = editUser.task2;
         document.getElementById('department').value = editUser.department;
         document.getElementById('mentor').value = editUser.mentor;
         document.getElementById('task1Result').value = editUser.task1Result;
         document.getElementById('task2Result').value = editUser.task2Result;

         saveBtn.innerText = 'Save';

         saveBtn.addEventListener('click', function () {
            editUser();
         });

         deleteBtn.innerText = 'Delete';
         deleteBtn.addEventListener('click', function () {
            var users = JSON.parse(localStorage.getItem('users')) || [];
            users.splice(editIndex, 1);
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = '../MainList.html';
         });
      } else {
         saveBtn.innerText = 'Add';
         saveBtn.addEventListener('click', addNewUser);
      }
   });
});