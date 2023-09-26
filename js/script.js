/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/* 
take in an array of objects and a page number
display 9 items per page in the provided format
*/
function showPage(list, page) {
   // select the correct area of the webpage 
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   // start and end indeces 
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   // for each object in the array, display it per the format provided
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const html = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>
         `;
         // insert the student information into the webpage
         studentList.insertAdjacentHTML('beforeend', html);
      }
   }
}

/*
add functioning page numbers to the webpage given
the number of objects in the list and showing only 9 objects/page
*/
function addPagination(list) {
   // get the total amount of pages
   const numOfPages = Math.ceil(list.length / 9);
   // select the area of the webpage to place the pagination buttons
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   // for each button, display it per the format provided
   for (let i = 1; i <= numOfPages; i++) {
      const html = `
      <li>
         <button type = 'button'>${i}</button>
      </li>
      `
      // insert the pagination buttons
      linkList.insertAdjacentHTML('beforeend', html);
   }
   // activate the first button
   linkList.querySelector('button').className = 'active';

   // change which button is active based on which page the user is on
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         const activeButton = linkList.querySelector('.active');
         const currentButton = e.target;
         activeButton.className = '';
         currentButton.className = 'active';
         showPage(list, currentButton.textContent);
      }
   });
}

// add a search bar 
function addSearchBar() {
   // select the area of the webpage to insert it
   const header = document.querySelector('.header');
   // format the HTML
   const html = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `;
   // insert
   header.insertAdjacentHTML('beforeend', html);
}

/* 
pull in the user's input from the search bar and the data array
compare the two to find matches and display them on the page 
*/
function searchFunc(list) {
   const input = document.getElementById('search');
   let inputUpper;
   let searchResults = [];

   // input comes from keys pressed while search bar is selecteed
   input.addEventListener('keyup', (e) => {
      searchResults = [];
      // convert input to uppercase to make search case insensitive
      inputUpper = input.value.toUpperCase();

      // loop over the data array and find objects that match the user's input in uppercase
      for (let i = 0; i < list.length; i++) {
         const fullName = `${list[i].name.first.toUpperCase()} ${list[i].name.last.toUpperCase()}`;
         if (fullName.includes(inputUpper)) {
            // push matches to a new array
            searchResults.push(list[i])
         }
      };
      // confirm that there are results. if results, show page - else display no results found message
      if (searchResults.length === 0) {
         document.querySelector('.student-list').innerHTML = `<div class='no-results'>No results found<div>`;
      } else {
         showPage(searchResults, 1);
      }
   });
   //addPagination(searchResults);
}



// Call functions
showPage(data, 1);
addPagination(data);
addSearchBar();
searchFunc(data);