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


function Changing_Labels1(){
    First_Given.innerHTML("Voltage");
    Second_Given.innerHTML("Current");
} 
function Changing_Labels2(){
    First_Given.innerHTML("Voltage");
    Second_Given.innerHTML("Power");
}
function Changing_Labels3(){
    First_Given.innerHTML("Power");
    Second_Given.innerHTML("Current");
}


var Get_Voltage = document.getElementById("Voltage");
var Get_Current = document.getElementById("Current");
var Get_Resistance = document.getElementById("Resistance"); 
var Get_Power = document.getElementById("Power");

var Voltage_And_Current = document.getElementById("voltandcurr").addEventListener("click",Changing_Labels1);
var Voltage_And_Power   = document.getElementById("Voltandpow").addEventListener("click",Changing_Labels2);;
var Power_And_Current   = document.getElementById("powandcurr").addEventListener("click",Changing_Labels3);;

var First_Given = document.getElementById("First_Given");
var Second_Given = document.getElementById("Second_Given");

var Result = document.getElementById("Result");
var Reset = document.getElementById("Reset");

var Input1 = document.getElementById("Input1");
var Input2 = document.getElementById("Input2");

