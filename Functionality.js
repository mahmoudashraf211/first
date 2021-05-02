// mathmatical equations
function get_Volt_By_Power_And_Current (p , i ){
    return p/i;
}
function get_Volt_By_Resistance_And_Current (r , i ){
    return i*r;
}
function get_Volt_By_Power_And_Resistance (p , r ){
    return Math.sqrt(p*r);
}


function get_Current_By_Power_And_Resistance (p,r){
    return Math.sqrt(p/r);
}
function get_Current_By_Power_And_Voltage (p,v){
    return p/v;
}
function get_Current_By_Volt_And_Resistance (v,r){
    return v/r;
}


function get_Power_By_Volt_And_Current(v,i){
    return v*i;
}
function get_Power_By_Volt_And_Resistance(v,r){
    return Math.pow(v,2)/r;
}
function get_Power_By_Current_And_Resistance(i,r){
    return Math.pow(i,2)*r;
}


function get_Resistance_By_Volt_And_Current(v,i){
    return v/i;
}
function get_Resistance_By_Volt_And_Power(v,p){
    return Math.pow(v,2)/p;
}
function get_Resistance_By_Current_And_Power(i,p){
    return p/Math.pow(i,2);
}

// supposed to be the labels chaning functions .. when the user for example chooses power and current so the label of 
// the first input is power and the second is current and so on

function Changing_Labels1(event){
    First_Given.innerHTML("Voltage");
    Second_Given.innerHTML("Current");
} 
function Changing_Labels2(event){
    First_Given.innerHTML("Voltage");
    Second_Given.innerHTML("Power");
}
function Changing_Labels3(event){
    First_Given.innerHTML("Power");
    Second_Given.innerHTML("Current");
}

// this funciton was a trial for accessing the menu elements .. and it worked but for somehow the event works only once.

function changeBackGround(m){
    if(m.value === voltage_And_Current){
    alert("Voltage and Current");
    }else if (m.value === Voltage_And_Power){
    alert("Voltage and Power");
    }else 
    alert("Nothing");
}
// variable for the whole body
var body = document.getElementById("body");

// variables for GET menu .. the first menu on the left
var Get_Voltage = document.getElementById("Voltage");
var Get_Current = document.getElementById("Current");
var Get_Resistance = document.getElementById("Resistance"); 
var Get_Power = document.getElementById("Power");

var menu = document.getElementById("Calculateid").onchange=changeBackGround(this);
var voltage_And_Current = document.getElementById("voltandcurr");
var Voltage_And_Power = document.getElementById("Voltandpow");
var Power_And_Current = document.getElementById("powandcurr");


var First_Given = document.getElementById("First_Given");
var Second_Given = document.getElementById("Second_Given");

var Result = document.getElementById("Result");
var Reset = document.getElementById("Reset");

Reset.addEventListener("click",function(){alert("Reset is clicked ");});
var Input1 = document.getElementById("Input1");
var Input2 = document.getElementById("Input2");

