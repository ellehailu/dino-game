import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './js/Dino.js';

function getWord(guess){
  let promise = Dino.getWord(guess);
  promise.then(function(getWord){
    printWin(getWord);
  }, function (errorArray){
    printError(errorArray);
  });
}

// function printElements(results){
//   console.log(results[0]);
//   document.querySelector('#showResponse').innerHTML =`${results[0]}`;
//   printWin();
// }

function printError(error){
  console.log(error);
  document.querySelector("#showResponse").innerHTML = `There was an error accessing the words ${error[0]}`;
}
function printWin(results){
  Dino.guessArray.forEach(function(element) {
    if (element === results) {
      document.querySelector("#showResponse").innerHTML = `You got it!`;
    }
  });
  document.querySelector('#showResponse').innerHTML =`${results[0]}`;
}
function handleFormSubmission(event) {
  event.preventDefault();
  const guess = document.querySelectorAll('.myInput');
  
  guess.forEach(function(element) {
    Dino.guessArray.push(element.value);
  });
  getWord(guess);
}
window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});