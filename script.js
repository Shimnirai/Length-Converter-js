function convert(){
let input = document.getElementById("input")
let result = document.getElementById("result")
let inval = Number(input.value)
let inc = inval/2.54
result.innerHTML = inc.toFixed(2) + " inches"
}




