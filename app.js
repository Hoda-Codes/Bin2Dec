const baseNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256];
const userInput = document.querySelector("#input");
let input = "";
let newString = "";
const result = document.querySelector(".result");
let buffer = 0;

let reversedInput = function reverse(e){
    
    for (var i = input.length - 1; i >= 0; i--) { 
        newString += input[i]; // or newString = newString + str[i];
    }
    return newString; // "olleh"

}

function calcDec(input) {
    reversedInput(input);
    for (var i = 0; i < newString.length; i++) {
        if (newString[i] === "0") {
        
            buffer += 0;
        }else{
            let base = Math.pow(2, [i]);
            buffer += base;
            result.innerText = buffer;
            console.log(base);}
            
        }
      
    }
    
  


userInput.addEventListener("keydown", function restrict(e) {
  if (e.key != 0 && e.key != 1) {
    e.target.value = null;
    alert("You may only use bianry here");
  } else {
    input += e.key;
  }
});

// document.querySelector("button").addEventListener("click", calcDec(input));
