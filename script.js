const myinput = document.getElementById("myinput");
const tofahrenheit = document.getElementById("tofahrenheit")
const tocelcius = document.getElementById("tocelcius")
const submit = document.getElementById("submit")
const result = document.getElementById("result")
let temp ;


function convert (){
    if(tofahrenheit.checked){
        temp = Number(myinput.value)
        temp = temp * 9 / 5 + 32 
        result.textContent = temp + "°F"
    }
    else if (tocelcius.checked){
        temp = Number(myinput.value)
        temp = (temp - 32) * (5/9) 
        result.textContent = temp + "°C"
    }
    else {
        result.textContent="Please Select an Converstion Method!!!!!!!!"
    }
}