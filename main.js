// exercise a
function getResultA() {
    var t = prompt("introducir valor para t");
    var resultA = Math.log(Math.abs((Math.pow(t,2)-Math.pow(t,3))));
    var roundResult = Math.round(resultA * 100) / 100;
    console.log(roundResult);

    var htmlTagResult = "<p> Resultado para el valor t: "+roundResult+" </p>";
    document.getElementById('resultA').innerHTML = htmlTagResult;
}

// exercise b

function getResultB() {
    var t = prompt("introducir valor para t para el segundo ejercicio: ");;
    var divisionResult = (75/(2*t));
    var degreesResult = (0.8*t)-3;
    var radiansConvertion =  degreesResult * Math.PI / 180;
    var cosResult = Math.cos(radiansConvertion);
    var resultB = divisionResult*cosResult;
    var roundResult = Math.round(resultB * 100) / 100;
    console.log(roundResult);
    
    var htmlTagResult = "<p> Resultado para el valor t: "+roundResult+" </p>";
    document.getElementById('resultB').innerHTML = htmlTagResult;
}

// exercise c

var x = 8.3;
var y = 2.4;
var resultC = Math.pow(x,2)+Math.pow(y,2)-(Math.pow(x,2)/Math.pow(y,2))
console.log(Math.round(resultC * 100) / 100);

// execrcise d

var resultD = Math.sqrt((x*y));
resultD = resultD - Math.sqrt(x+y);
resultD = resultD + Math.pow(((x-y)/(x-2*y)),2)
resultD = resultD - Math.sqrt(x/y);
console.log(Math.round(resultD * 100) / 100);