
function createStudent() {
     let studentId = document.getElementById('studentId').value;
     let studentName = document.getElementById('studentName').value;
     let age = document.getElementById('age').value;
     let phone = document.getElementById('phone').value;
     let email = document.getElementById('email').value;
     if (studentId.length !== 6) {
         alert('Student ID phải có đúng 6 chữ số');
         return;
     }

     if (studentName.trim() === '') {
         alert('Student Name không được để trống');
         return;
     }

     if (age < 18) {
         alert('Age phải lớn hơn hoặc bằng 18');
         return;
     }

     if (!/^\d{10,11}$/.test(phone)) {
         alert('Phone phải có 10 hoặc 11 chữ số');
         return;
     }

     if (!/^\S+@\S+\.\S+$/.test(email)) {
         alert('Email không đúng định dạng');
         return;
     }

     let studentInfoDiv = document.getElementById('studentInfo');
     studentInfoDiv.innerHTML = `
         <h3>Thông tin Sinh viên</h3>
         <p><strong>Student ID:</strong> ${studentId}</p>
         <p><strong>Student Name:</strong> ${studentName}</p>
         <p><strong>Age:</strong> ${age}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Email:</strong> ${email}</p>
     `;
 }