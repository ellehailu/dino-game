import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './js/Dino.js';

function getWord(guess){
  let promise = Dino.getWord(guess);
  promise.then(function(getWord){
    printElements(getWord);
  }, function (errorArray){
    printError(errorArray);
  });
}

function printElements(results){
  console.log(results[0]);
  document.querySelector('#showResponse').innerHTML =`${results[0]}`;
}

function printError(error){
  console.log(error);
  document.querySelector("#showResponse").innerHTML = `There was an error accessing the words ${error[0]}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const guess = document.querySelector('#userinput').value;
  document.querySelector('#userinput').value = null;
  getWord(guess);
}
window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});