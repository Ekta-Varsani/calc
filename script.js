
// euqal to--------------------//
function calculate(){
    let x = document.getElementById("display").innerHTML
    let y = eval(x)
    document.getElementById("display").innerHTML = y
}

// pi------------------------------------//  pending

function pi(){
    let pi = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = Math.PI(pi)
}

// e-----------------------------//
function e(){
    let x = document.getElementById("display").innerHTML
    let y = eval(x)
    document.getElementById("display").innerHTML = Math.pow(x,y)
}

// clear screen--------------------//
function clrscr(){
    document.getElementById("display").innerHTML = "";
}

// backspace------------------------//
function backspace(){
    let bs = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = bs.substring(0,bs.length-1)
}

// suqare----------------------------//
function square(){
    let sq = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = sq * sq
}

// inverse-------------------------------//
function inverse(){
    let inv = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = 1 / inv
}

// absolute value--------------------------//
function abs(){
    let exp = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = Math.abs(exp);
}

// exponencial--------------------------//
function exp(){
    let ex = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = Math.exp(ex)
}

// percentage-----------------------//
function percentage(){
    let perc = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = perc * 0.01
}

// square root-----------------------//
function squareRoot(){
    let sr = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = Math.sqrt(sr)
}

// ten power-------------------//
// function tenPower(){
//     let tp = document.getElementById("display").innerHTML
//     document.getElementById("display").innerHTML = Math.pow(10, tp)
// }
const tp = document.getElementById("tpower");
tp.addEventListener("click", () => {
    let tpower = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = Math.pow(10, tpower)
})
