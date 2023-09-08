
const newBookBtn = document.querySelector('.newBookBtn');
const modal = document.querySelector('.modal');
const form = document.getElementById('bookForm');

newBookBtn.addEventListener('click', function() {
    modal.showModal();
});

form.addEventListener('subm,it', function(event) {
    
})




const myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status

}

function addBookToLibrary(title, author, pages, status) {
  // do stuff here
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

function populateDisplay(myLibrary) {

    //for each book in array
    myLibrary.forEach( (book) => {
        
        let bookGrid = document.querySelector('.book-grid');
        
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
        cardStatus.innerText = `Status: {cardStatus}`;




        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardAuthor);
        cardElement.appendChild(cardPages);
        cardElement.appendChild(cardAuthor);
        


        //place card in grid
        bookGrid.appendChild(cardElement); 
    });
     

}


//Test Data
addBookToLibrary("Harry Potter", "J.K. Rowling", 364, "read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "unread");
addBookToLibrary("1984", "George Orwell", 328, "unread");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 224, "unread");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "unread");
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, "read");
addBookToLibrary("To the Lighthouse", "Virginia Woolf", 209, "unread");
addBookToLibrary("The Da Vinci Code", "Dan Brown", 454, "read");


populateDisplay(myLibrary);