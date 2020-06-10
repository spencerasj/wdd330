document.getElementById("button1").addEventListener("click", button);

function button() {
    let a = document.getElementById('usertext').value;
    document.getElementById("div1").innerHTML = a;
}


document.getElementById("button2").addEventListener("click", function(){(document.getElementById("number").value)
});
document.getElementById("div2").innerHTML = answer;

function sum(num) {
   // let num = parseInt(document.getElementById("number").value);
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
   return total;
}
