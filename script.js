// vars
const newBookBtn = document.querySelector('.newBookBtn');
const modal = document.querySelector('.modal');
const form = document.getElementById('bookForm');
const bookGrid = document.querySelector('.book-grid');
const myLibrary = [];

// open add book form on click 
newBookBtn.addEventListener('click', function() {
    modal.showModal();
});

// get user data on submit
form.addEventListener('submit', function(event) {

  clearGrid();
  event.preventDefault()
  modal.close();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').checked ? 'read' : 'unread';

  addBookToLibrary(title, author, pages, status);
  populateDisplay(myLibrary);

  
  form.reset();
    
})


// book object constructor
function Book(title, author, pages, status) {

  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status

}

// add book to library array
function addBookToLibrary(title, author, pages, status) {

    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

function populateDisplay(myLibrary) {

    //for each book in array
    myLibrary.forEach( (book) => {
        
        
        //store vars
        const {title, author, pages, status } = book;
        
        //create card element
        let cardElement = document.createElement('div');
        cardElement.classList.add('book-card');
      

        let cardTitle = document.createElement('p');
        cardTitle.innerText = `Title: ${title}`;


        let cardAuthor = document.createElement('p');
        cardAuthor.innerText = `Author: ${author}`;


        let cardPages = document.createElement('p');
        cardPages.innerText = `Pages: ${pages}`;

        let cardStatus = document.createElement('p');
        cardStatus.innerText = `Status: ${status}`;


        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardAuthor);
        cardElement.appendChild(cardPages);
        cardElement.appendChild(cardAuthor);
        cardElement.appendChild(cardStatus);
        


        //place card in grid
        bookGrid.appendChild(cardElement); 
    });
     

}

function clearGrid() {
  bookGrid.innerHTML = "";
}

