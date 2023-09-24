/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


function showPage(list, page) {
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   // https://teamtreehouse.com/library/practice-data-pagination/solution-display-a-specific-page
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const html = `
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
         studentList.insertAdjacentHTML('beforeend', html);
      }
   }
}


let currentPage;

function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   // https://teamtreehouse.com/library/practice-data-pagination/solution-adding-pagination-buttons#workspaces
   for (let i = 1; i <= numberOfButtons; i++) {
      const html = `
      <li>
         <button type = 'button'>${i}</button>
         </li>
      `
      linkList.insertAdjacentHTML('beforeend', html);
   }
   linkList.querySelector('button').classList.add('active');

   // https://teamtreehouse.com/library/practice-data-pagination/solution-trigger-page-changes
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const activeButton = linkList.querySelector('.active');
         const currentButton = e.target;
         activeButton.classList.remove('active');
         currentButton.classList.add('active');
         showPage(data, currentButton.textContent);
      }
   });
}


// Call functions
showPage(data, 1);
addPagination(data);