// mathmatical equations
function Equations(){
    if (Get_Menu.value ==="Resistance" && First_Given.innerHTML === "Volt" && Second_Given.innerHTML==="Current")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)/parseInt(Input2.value,10);
    else if (Get_Menu.value ==="Power" && First_Given.innerHTML === "Volt" && Second_Given.innerHTML==="Current")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)*parseInt(Input2.value,10);
    else if (Get_Menu.value === "Resistance" && First_Given.innerHTML === "Power" && Second_Given.innerHTML==="Current")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)/Math.pow(parseInt(Input2.value,10),2);
    else if (Get_Menu.value === "Voltage" && First_Given.innerHTML === "Power" && Second_Given.innerHTML==="Current")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)/parseInt(Input2.value,10);
    else if (Get_Menu.value === "Resistance" && First_Given.innerHTML === "Power" && Second_Given.innerHTML==="Volt")
        Result.innerHTML="Result ... " +Math.pow(parseInt(Input2.value,10),2)/parseInt(Input1.value,10);
    else if (Get_Menu.value === "Voltage" && First_Given.innerHTML === "Power" && Second_Given.innerHTML==="Resistance")
        Result.innerHTML="Result ... "+Math.sqrt(parseInt(Input1.value,10)*parseInt(Input2.value,10));
    else if (Get_Menu.value === "Voltage" && First_Given.innerHTML === "Current" && Second_Given.innerHTML==="Resistance")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)*parseInt(Input2.value,10);
    else if (Get_Menu.value ==="Power" && First_Given.innerHTML === "Volt" && Second_Given.innerHTML==="Resistance")
        Result.innerHTML="Result ... " +Math.pow(parseInt(Input1.value,10),2)/parseInt(Input2.value,10);
    else if (Get_Menu.value ==="Power" && First_Given.innerHTML === "Current" && Second_Given.innerHTML==="Resistance")
        Result.innerHTML="Result ... " +Math.pow(parseInt(Input1.value,10),2)*parseInt(Input2.value,10);
    else if (Get_Menu.value ==="Current" && First_Given.innerHTML === "Power" && Second_Given.innerHTML==="Resistance")
        Result.innerHTML="Result ... "+Math.sqrt(parseInt(Input1.value,10)/parseInt(Input2.value,10));
    else if (Get_Menu.value ==="Current" && First_Given.innerHTML === "Power" && Second_Given.innerHTML==="Volt")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)/parseInt(Input2.value,10);
    else if (Get_Menu.value ==="Current" && First_Given.innerHTML === "Volt" && Second_Given.innerHTML==="Resistance")
        Result.innerHTML="Result ... " +parseInt(Input1.value,10)/parseInt(Input2.value,10);
    else
    alert("Nope ! not working ");    
}


// this funciton made to update the input lables according to the list of givens (by ..)
function changeBackGround(){

if (menu.value===First_Of_By.value && First_Of_By.innerHTML==="Power And Resistance"){
    First_Given.innerHTML="Power";
    Second_Given.innerHTML="Resistance";
}else if (menu.value===First_Of_By.value && First_Of_By.innerHTML==="Volt And Current"){
    First_Given.innerHTML="Volt";
    Second_Given.innerHTML="Current";
}else if (menu.value===Second_Of_By.value && Second_Of_By.innerHTML==="Power And Current"){
    First_Given.innerHTML="Power";
    Second_Given.innerHTML="Current";
}else if (menu.value===Second_Of_By.value && Second_Of_By.innerHTML==="Volt And Resistance"){
    First_Given.innerHTML="Volt";
    Second_Given.innerHTML="Resistance";
}else if (menu.value===Third_Of_By.value && Third_Of_By.innerHTML==="Current And Resistance"){
    First_Given.innerHTML="Current";
    Second_Given.innerHTML="Resistance";
}else if (menu.value===Third_Of_By.value && Third_Of_By.innerHTML==="Power And Volt"){
    First_Given.innerHTML="Power";
    Second_Given.innerHTML="Volt";
}else {
    First_Given.innerHTML="???????????";
    Second_Given.innerHTML="???????????";
}
}

// setting the second menu of (what are we gonna use) based on the first menu (what we want to get .. )
function bywhat (){
    if (Get_Menu.value ===Get_Voltage.value){
        First_Of_By.innerHTML="Power And Resistance";
        Second_Of_By.innerHTML="Power And Current";
        Third_Of_By.innerHTML="Current And Resistance";
    }else if (Get_Menu.value === Get_Current.value){
        First_Of_By.innerHTML="Power And Resistance";
        Second_Of_By.innerHTML="Volt And Resistance";  
        Third_Of_By.innerHTML="Power And Volt";   
    }else if (Get_Menu.value === Get_Resistance.value){
        First_Of_By.innerHTML="Volt And Current";
        Second_Of_By.innerHTML="Power And Current";
        Third_Of_By.innerHTML="Power And Volt";
    }else if (Get_Menu.value === Get_Power.value){
        First_Of_By.innerHTML="Volt And Current";
        Second_Of_By.innerHTML="Volt And Resistance";
        Third_Of_By.innerHTML="Current And Resistance";
    }
}
// variable for the whole body
var body = document.getElementById("body");

// variables for GET menu .. the first menu on the left
var Get_Menu = document.getElementById("Get");
Get_Menu.addEventListener("change",bywhat);
var Get_Voltage = document.getElementById("Voltage");
var Get_Current = document.getElementById("Current");
var Get_Resistance = document.getElementById("Resistance"); 
var Get_Power = document.getElementById("Power");

//variables for givens .. the second menu on the right

var menu = document.getElementById("Calculateid");
menu.addEventListener("change",changeBackGround);
var First_Of_By = document.getElementById("voltandcurr");
var Second_Of_By = document.getElementById("Voltandpow");
var Third_Of_By = document.getElementById("powandcurr");

// variables for labels of inputs
var First_Given = document.getElementById("First_Given");
var Second_Given = document.getElementById("Second_Given");

// variables for the resutl paragraph tag and result button
var Result = document.getElementById("Result");
var Reset = document.getElementById("Reset");


Reset.addEventListener("click",ResetingInputs);
// variables for inputs 
var Input1 = document.getElementById("Input1");
var Input2 = document.getElementById("Input2");
Input1.addEventListener("input",Equations);
Input2.addEventListener("input",Equations);
function ResetingInputs(){
    Input1.value = "";
    Input2.value = ""; 
}