document.getElementById("button1").addEventListener("click", button);

function button() {
    let a = document.getElementById('usertext').value;
    document.getElementById("div1").innerHTML = a; 
}

document.getElementById("button2").addEventListener("click", sum((parseInt(document.getElementById("number").value))));

function sum(num) {
   
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum += i;
    } 
    document.getElementById("div2").innerHTML = sum; 
}