const myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read){

  let book = new Book(title, author, pages, read);
  myLibrary.push(book);

}

addBookToLibrary('Sorcerers Stone', 'Rowling', '394', 'read');
addBookToLibrary('Chamber of Secrets', 'Ronald', '396', 'unread');
addBookToLibrary('Prisoner of Azkaban', 'Black', '400', 'unread');
addBookToLibrary('Goblet of Fire', 'Edward', '400', 'unread');

console.log(myLibrary);