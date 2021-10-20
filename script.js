
const btn = document.querySelector(".submitButton")
const form = document.querySelector(".addBook");
const bookList = document.querySelector(".BookList");
const books = document.querySelector(".books");
const readBook = document.querySelector(".readBooks")
const unRead = document.querySelector(".unRead")
let myLibrary = [
    {title: "Brave New World",
    author: "Aldous Huxley",
    pages : 209,
    read: true}
];

drawBooks(myLibrary);
function Book(){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = true;

}

function addBookToLibrary(book){
    myLibrary.push(book);
    console.log(myLibrary);
    const readBooks = myLibrary.filter(book => book.read);
    const unReadArr = myLibrary.filter(book => !book.read);
    readBook.textContent='';
    unRead.textContent='';
    drawBooks(readBooks);
    drawBooks(unReadArr);
}

function drawBooks(arr){
    
    arr.forEach( book => {
        const listAdd = document.createElement('li'); //Create a li element
        const title = document.createElement('h3');
        const author = document.createElement('h4');
        const pages = document.createElement('h5');
        title.textContent = book.title;
        author.textContent= book.author;
        pages.textContent = book.pages + " pages";

        
        if(book.read){
            listAdd.classList.add('bookCard')
            listAdd.appendChild(title);
            // listAdd.appendChild(author);
            // listAdd.appendChild(pages);
            readBook.appendChild(listAdd);
        }else{
            listAdd.classList.add('bookCard')
            listAdd.appendChild(title);
            // listAdd.appendChild(author);
            // listAdd.appendChild(pages);
            unRead.appendChild(listAdd);       
        }
        



    });
}




btn.addEventListener('click', (e) =>{
    console.log("Book Submitted:"+ form[0].value + form[1].value + form[2].value + form[3].checked);
    const newBook = new Book()
    newBook.title = form[0].value;
    newBook.pages = form[2].value;
    newBook.author = form[1].value;
    if(!form[3].checked){
        newBook.read = false;
    }
    console.log(newBook)
    addBookToLibrary(newBook);
})