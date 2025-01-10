document.addEventListener("DOMContentLoaded", function(){

    const counterElement = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');


let timer =0;
let interval;

function startTimer(){
    interval = setInterval(function(){
        if (!isPaused){
        timer++;
        counterElement.textContent = timer
       }
    },1000)
}

let isPaused = false
function pauseTimer() {
    isPaused = true;
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
  }

  // Resume the timer and enable buttons
  function resumeTimer() {
    isPaused = false;
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
  }

pauseButton.addEventListener('click', () => {
    if (isPaused) {
      resumeTimer();
      pauseButton.textContent = "Pause";
    } else {
      pauseTimer();
      pauseButton.textContent = "Resume";
    }
  });

plusButton.addEventListener('click', function(){
    if(!isPaused){
        timer++;
        counterElement.textContent = timer
    }
})

minusButton.addEventListener('click', function(){
    if (!isPaused && timer>0){
        timer--;
        counterElement.textContent = timer
    }
})
let likes = {}

    heartButton.addEventListener('click', function(){
       if(!isPaused){
        likes[timer] = likes[timer] ? likes[timer] + 1 : 1
        let likeItem = document.createElement('li')
        likeItem.textContent = `❤️  ${timer} has been liked ${likes[timer]} times(s)`
        likesList.appendChild(likeItem)
       }
    })
commentForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(commentInput.value){
        let newComment = document.createElement('p')
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment)
        commentInput.value = ''
    }
})

startTimer();

})