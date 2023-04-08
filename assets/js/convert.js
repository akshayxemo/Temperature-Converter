let sUnit = document.getElementById("s-unit").value;
let dUnit = document.getElementById("d-unit").value;
const src = document.getElementById("source");
const dst = document.getElementById("dest");
const err = document.getElementById("error");

function containsOnlyNumbers(str){
    return /^\d+$/.test(str);
}

function setSrcDst(){
    sUnit = document.getElementById("s-unit").value;
    dUnit = document.getElementById("d-unit").value;
}
function calc(id){
    let In = document.getElementById(id).value;
    setSrcDst();
    if(!containsOnlyNumbers(In.split(".").join("")) && In !=""){
        document.getElementById(id).value = "";
        err.style.display = "block";
    }
    else{
        err.style.display = "none";
    }
    if(id == "source"){
        In = parseFloat(convert(parseFloat(In), sUnit, dUnit).toFixed(3));
        In=="NaN"? dst.value = "0" : dst.value = In;
    }
    else{
        In = parseFloat(convert(parseFloat(In), dUnit, sUnit).toFixed(3));
        In=="NaN"? src.value = "0" : src.value = In;
    }
}
function convert(val, sUnit, dUnit){
    //let rs = 0;
    if(sUnit == "C" && dUnit == "F"){
        return (val * (9/5)) + 32;
    }
    else if(sUnit == "C" && dUnit == "K"){
        return (val + 273.15);
    }
    else if(sUnit == "F" && dUnit == "C"){
        return ((val - 32) * (5/9));
    }
    else if(sUnit == "F" && dUnit == "K"){
        return (((val - 32) * (5/9))+273.15);
    }
    else if(sUnit == "K" && dUnit == "C"){
        return (val - 273.15);
    }
    else if(sUnit == "K" && dUnit == "F"){
        return ((val - 273.15)*(9/5) + 32);
    }
    else{
        return val;
    }
}