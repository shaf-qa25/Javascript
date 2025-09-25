const prompt = require("prompt-sync")();
let a= Math.random()*100;
a=Number.parseInt(a)
let score=100;
let inp;

while(inp!=a){
    score=score-1;
    inp=prompt("Enter number between 0 and 100: ");
    if(inp==a){
        console.log("You have guessed the correct number");
        console.log(`You guessed the correct number in ${100-score} chances`);

        
    }
    else if(inp>a && inp<100){
            console.log("Your number is greater then the actual number");
            
    }
    else if(inp<a && inp>0){
        console.log("Your number is less than the actual number");
        
    }
    else{
        console.log("Please enter number between 0 and 100");
    }
}

