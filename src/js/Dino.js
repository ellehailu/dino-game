export default class Dino{
    static getWord(guess){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            const url = `https://dinoipsum.com/api?format=json&paragraphs=1&words=1`;

            request.addEventListener("loadend", function(){
                const response = JSON.parse(this.responseText);
                if(this.status === 200){
                    resolve([response, guess]);
                }
                else{
                    reject([this, guess]);
                }
            });
            request.open("GET", url, true);
            request.send();
        });
    }
    addGuess(array) {
        console.log(this);
        array.forEach(function(thing) {
          this.guess.push(thing);
        });
}