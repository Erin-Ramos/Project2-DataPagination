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

function addSearchBar() {
   const header = document.querySelector('.header');
   const html = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `;
   header.insertAdjacentHTML('beforeend', html);
}

/*
When the "Search" is performed, the student data is filtered so that only students whose name includes the search value are shown.
he search should be case-insensitive and work for partial matches. For example, if the value B or b is typed into the search field, 
students with “Bill” in the name would be shown. Likewise, if LL were typed into the search field, students with the first name "Bill" 
would appear, as well as students with the last name "Williams".

To improve the functionality and user experience, consider adding a keyup event listener to the search input so that the list filters 
in real-time as the user types. This should be in addition to making the search button clickable since pasting text into the search 
bar might not trigger the keyup event.

Pro Tip
Remember you have already created a function to show nine students per page. All you really need to do here is create a new student
list based on the search matches and then use that new list as an argument when calling the already existing function to display the students.
*/


function searchFunc(list) {
   let searchResults = [];
   const input = document.getElementById('search');
   let inputUpper;

   input.addEventListener('keyup', () => {
      inputUpper = input.value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
         const firstName = list[i].name.first.toUpperCase();
         const lastName = list[i].name.last.toUpperCase();

         if (firstName.includes(inputUpper) || lastName.includes(inputUpper)) {
            searchResults.push(data[i]);
            showPage(searchResults, 1);
            console.log(inputUpper);
            console.log(searchResults);
            console.log(searchResults.length);
         };
      };
   });
}


// Call functions
showPage(data, 1);
addPagination(data);
addSearchBar();
searchFunc(data);