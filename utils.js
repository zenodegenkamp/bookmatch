


function disableEnablebtns(){
    const likeBtn = document.getElementById('like-btn')
    const nopeBtn = document.getElementById('nope-btn')

    likeBtn.disabled = true 
    nopeBtn.disabled = true 

    setTimeout(function(){

        likeBtn.disabled = false
        nopeBtn.disabled = false
    }, 1500)

}

function removeBtns(){
    const likeBtn = document.getElementById('like-btn')
    const nopeBtn = document.getElementById('nope-btn')

    likeBtn.style.display = "none"
    nopeBtn.style.display = "none"
}

export {disableEnablebtns,removeBtns}