/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   let studentInfo = '';
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   for (i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentInfo += `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
               <h3>${data[i].name.first} ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${data[i].registered.date}</span>
            </div>
         </li>
         `;
      }
   }
   studentList.insertAdjacentHTML('beforeend', studentInfo);
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination() {

}


// Call functions
showPage(data, 1);
addPagination();