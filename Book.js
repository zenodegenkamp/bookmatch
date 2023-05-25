// Book class is created with all the properties
class Book {
    constructor(data){
        Object.assign(this, data)
    }

    getBookHtml(){
        const {reviews, avatar, timesSold, bio} = this
        return  `
            
            <img class='main-avatar' src="${avatar}" alt="${avatar}" width=100% height="600">
            <h1 class='main-name-length'>${reviews}, ${timesSold} </h1>
            <p class='main-bio'>${bio}</p>
            <img class='like-badge' src="images/like-image.png" alt="like badge" width=50px height=50px>
            <img class='nope-badge' src="images/nope-image.png" alt="nope badge" width=50px height=50px>
            `
    }
}

export default Book
