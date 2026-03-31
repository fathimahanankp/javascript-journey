// Get elements

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

//Functions for operations

function add(){
    result.textContent = Number(num1.value) + Number(num2.value);
}

function subtract(){
    result.textContent = Number(num1.vale) - Number(num2.value);
}

function multiply(){
    result.textContent = Number(num1.value) * Number(num2.value);
}

function divide(){
    if(Number(num2.value)===0){
        result.textContent = "Error: Division by zero is not allowed.";
    }
    else{
        result.textContent = Number(num1.value)/ Number(num2.valur);
    }
}

// Event listeners
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);