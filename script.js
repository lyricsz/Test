
let output = document.getElementById("output");
let input = document.getElementsByName("input");
input = input[0]
let scoreTxt = document.querySelector("#score");
let digitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let text = "";
let score = 0;

function randomDigits(){
    input.disabled = true;
    text = "";
    for(let i = 0; i < Math.floor(Math.random() * ((26) - 8) + 8); i++){
        let random = Math.floor(Math.random() * digitArray.length);
        text += String(random);
    }

    output.innerHTML = text;
    setTimeout(() => {
        output.innerHTML = "";
        input.disabled = false;
    }, 30000)
}

window.onload = randomDigits()

function check(){

    if(text === input.value){
        score++;
        randomDigits()
        input.value = "";
        if(score > 50){
            alert("You Win!");
            window.location.reload();
        }
    }else{
        score--;
        randomDigits();
        input.value = "";
        if(score < -50){
            alert("You Loose!");
            window.location.reload();
        }
    }

    scoreTxt.innerHTML = score;
}