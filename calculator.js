function displayValue(num){
    console.log(num);
   scr.value=scr.value+num
}

function allclear(){
   
    scr.value=""
}
function evaluateNum(){
    scr.value=  eval(scr.value)
    console.log(scr.value);
}
function backspace(){
    scr.value=scr.value.slice(0,-1)
}