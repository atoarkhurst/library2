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

  event.preventDefault();

  clearGrid();
  
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
function Book(title, author, pages, status, index) {

  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status,
  this.index = index

}

// add book to library array
function addBookToLibrary(title, author, pages, status) {

    let index = myLibrary.length;
    let book = new Book(title, author, pages, status, index);
    myLibrary.push(book);
}

function populateDisplay(myLibrary) {

    //for each book in array
    myLibrary.forEach( (book) => {
        
        
        //store vars
        const {title, author, pages, status, index} = book;
        
        //create card element
        let cardElement = document.createElement('div');
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');

        let statusBtn = document.createElement('button');
        statusBtn.classList.add('status-btn');

        removeBtn.innerText = "remove";
        statusBtn.innerText = status;
        cardElement.classList.add('book-card');
        cardElement.dataset.index = index; 
      

        let cardTitle = document.createElement('h2');
        cardTitle.innerText = title;


        let cardAuthor = document.createElement('p');
        cardAuthor.innerText = author;


        let cardPages = document.createElement('p');
        cardPages.innerText = `${pages} pages`;

        let cardStatus = document.createElement('p');
        cardStatus.innerText = `Status: ${status}`;


        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardAuthor);
        cardElement.appendChild(cardPages);
        cardElement.appendChild(statusBtn);
        cardElement.appendChild(removeBtn);


        //place card in grid
        bookGrid.appendChild(cardElement); 
    });

    registerRemoveButtonListeners();
    registerToggleStatusListeners();

  }

// Clear the grid before displaying new library array
function clearGrid() {
  bookGrid.innerHTML = "";
}

// reset indexes of library array
function resetIndexes() {
  let i=0; 

  myLibrary.forEach( ( book )  => {
    book.index = i;
    i++;

   })
}





// Adding the four books to your library
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "unread");
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, "read");
addBookToLibrary("To the Lighthouse", "Virginia Woolf", 209, "unread");
addBookToLibrary("The Da Vinci Code", "Dan Brown", 454, "read");


populateDisplay(myLibrary);

    // remove book from library array by index
    function registerRemoveButtonListeners() {
      const removeBtns = document.querySelectorAll('.remove-btn');
      
      removeBtns.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
          let removedBookIndex = event.target.parentNode.dataset.index;
    
          myLibrary.splice(removedBookIndex, 1);
          clearGrid();
          resetIndexes();
          populateDisplay(myLibrary);
        });
      });
    }


// Toggle read status 
function registerToggleStatusListeners() {
  const statusBtns = document.querySelectorAll('.status-btn');

  statusBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {

      let selectedBookIndex = event.target.parentNode.dataset.index;

      let selectedBook = myLibrary[selectedBookIndex];

      let status = selectedBook.status;

      let selectedBtn = event.target;

      if (status == "read") {
        selectedBook.status = 'unread';
        
      } else {
        selectedBook.status = 'read';
      }
     
      selectedBtn.innerHTML = selectedBook.status;
    })

  })


}
