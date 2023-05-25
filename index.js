import books from './data.js'
import Book from './Book.js'
import {disableEnablebtns, removeBtns} from '/utils.js'
const likeBtn = document.getElementById('like-btn')
const nopeBtn = document.getElementById('nope-btn')
const badgeSvg = document.getElementById('badge-svg')
const savedBooks = []

// Renders the book
function renderBook(){
    document.getElementById('book-section').innerHTML = firstBook.getBookHtml()
}

// gets a  new book 
function nextBook(){
   
    // removes the current Book from the array
    const updatedBookArray = books.shift()
    
    // Checks if there is a new book, if not ends game
    return books.length > 0 ? new Book(books[0])
        : endGame()
}


// Function that shows like Badge, disables buttons, updates the variables and saves book to array
likeBtn.addEventListener('click', isLiked)
function  isLiked(){
    
    // Shows the badge
    document.getElementsByClassName('like-badge')[0].style.display = "block"
    
    // Shows new book html
    setTimeout(setNextBookHtml, 1500)
    
    // Disable the btns when new books is loading
    disableEnablebtns()
    
    // Update the variables 
    books[0].hasBeenSwiped = "true"
    books[0].hasBeenLiked = "true"

    // Add liked book to array
    savedBooks.push(books[0]) 

}

// Function that shows nope badge, updates variable and disables button 
nopeBtn.addEventListener('click', isNoped)
function isNoped(){

    // Shows badge and disables the buttons 
    document.getElementsByClassName('nope-badge')[0].style.display = "block"
    disableEnablebtns()
    setTimeout(setNextBookHtml, 1500)
    books[0].hasBeenSwiped = "true"
}

//  function that gets the next book and changes the html 
function setNextBookHtml() {
    document.getElementById('book-section').innerHTML = nextBook().getBookHtml()
}

// SHOW BOOK LIST when user has liked some books
document.getElementById('chat-icon').addEventListener('click', setSavedBooksHtml)
function setSavedBooksHtml(){
    
    // Remove the buttons
    removeBtns()

    // Checks if saved books is more than 0, show list othwerwise too picky message
    if (savedBooks.length > 0){

        document.getElementById('book-section').innerHTML = savedBooks.map(function(book){
            return `<img class="bookList" src="${book.avatar}">`
        }).join('')
    }
    else{
        document.getElementById('book-section').innerHTML = `
        <img class='main-avatar' src="images/crying.gif" alt="crying monkey">
        <h1 class='main-name-length'> 0 matches, You are too picky</h1>`
    }
}


// function that shows the user his/her profile 
document.getElementById('person-icon').addEventListener('click', setProfileHtml)
function setProfileHtml(){
   
    // Remove the buttons 
    removeBtns()
    
    // inserts the persons profile page
    document.getElementById('book-section').innerHTML = 
    `
    <section class='profile-section'>
    <img class='profile-picture' src='images/monkey.jpeg'>
    <H1 class='profile-h1'>Professional reader</h1>
    <p class='profile-p'>monkeythatReads@gmail.com<p>
    <p class='profile-p'>+319999999<p>
    <p class='profile-p'> A dedicated reader of all types of books<p>
    </section>
    `
}

// Executes the end game logic
function endGame() {
        
    document.getElementById('book-section').innerHTML = 
    
    `
    <h1 class='main-name-length'>Good luck reading your Dates</h1>
    <p class='main-bio'> Click on the chat icon to see your current books! </p>
    <img class='main-avatar' src='images/monkey-reading.gif' alt='monkey reading book'>
    `
   
    // Alerts the user to look at chat icon
    document.getElementById('chat-icon').src = "images/chat1.png"
}

const firstBook = new Book(books[0]) 

renderBook()