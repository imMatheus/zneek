
var color2;

var elements = document.getElementsByClassName('shop-card-content-size-item');
var current1 = 3;
var current2 = 8;
var current3 = 13;

function sizeChange1(cElement){
     for(var i = 0; i < 5; i++){
         elements[i].style.backgroundColor = "white";
     }
     document.getElementById("size" + cElement).style.backgroundColor = color2; 

     current1 = cElement;
 }
 
 function sizeChange2(cElement){
    
      for(var i = 5; i < 10; i++){
          elements[i].style.backgroundColor = "white";
      }
      document.getElementById("size" + cElement).style.backgroundColor = color2; 
      current2 = cElement;
}
 
 function sizeChange3(cElement){
 
      for(var i = 10; i < 15; i++){
          elements[i].style.backgroundColor = "white";
      }
      document.getElementById("size" + cElement).style.backgroundColor = color2; 
       current3 = cElement;
  }

//Denna funktion skapar ett nummer som sen avgör vilken färg som kommer vara vår
// --main-color när sidan laddas första gpången, 
// varje gång sidan laddas upp på nytt så väljer den en ny färg
var colorNumber = Math.floor(Math.random() * 4);
if(colorNumber  === 0){
    document.documentElement.style.setProperty('--main-color', 'Tomato');
    color2 = 'Tomato';
}
else if(colorNumber  === 1){
    document.documentElement.style.setProperty('--main-color', 'limegreen');
    color2 = 'limegreen';
}
else if(colorNumber  === 2){
    document.documentElement.style.setProperty('--main-color', '#87ceeb');
    color2 = '#87ceeb';
}
else{
    document.documentElement.style.setProperty('--main-color', '#b900ad');
    color2 = '#b900ad';
}


//4 olika funktioner för baren till vänster på min hemsida för att byta färgen
//på --main-color
function changeColorTomato(){
    document.documentElement.style.setProperty('--main-color', 'Tomato');
    color2 = 'Tomato';
    elements[current1 - 1].style.backgroundColor = color2;
    elements[current2 - 1].style.backgroundColor = color2;
    elements[current3 - 1].style.backgroundColor = color2;
   
}

function changeColorSlime(){
    document.documentElement.style.setProperty('--main-color', 'limegreen');
    color2 = 'limegreen';
    elements[current1 - 1].style.backgroundColor = color2;
    elements[current2 - 1].style.backgroundColor = color2;
    elements[current3 - 1].style.backgroundColor = color2;
  
}

function changeColorBlue(){
   document.documentElement.style.setProperty('--main-color', '#87ceeb');
   color2 = '#87ceeb';
   elements[current1 - 1].style.backgroundColor = color2;
   elements[current2 - 1].style.backgroundColor = color2;
   elements[current3 - 1].style.backgroundColor = color2;
 
}

function changeColorPurple(){
    document.documentElement.style.setProperty('--main-color', '#b900ad');
    color2 = '#b900ad';
    elements[current1 - 1].style.backgroundColor = color2;
    elements[current2 - 1].style.backgroundColor = color2;
    elements[current3 - 1].style.backgroundColor = color2;
   
}
