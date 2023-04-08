let sUnit = document.getElementById("s-unit").value;
let dUnit = document.getElementById("d-unit").value;
const src = document.getElementById("source");
const dst = document.getElementById("dest");

function setSrcDst(){
    sUnit = document.getElementById("s-unit").value;
    dUnit = document.getElementById("d-unit").value;
}
function calc(id){
    let In = document.getElementById(id).value;
    setSrcDst();
    if(id == "source"){
        In = convert(parseInt(In), sUnit, dUnit).toFixed(2);
        dst.value = In;
    }
    else{
        In = convert(parseInt(In), dUnit, sUnit).toFixed(2);
        src.value = In;
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