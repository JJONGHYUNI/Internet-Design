"use strict";
let play;
let index = 0;
let delay = 171;
let clickCount=0;
let size=36;
var result;
(function(){
  window.onload=function(){
    let startbtn=document.getElementById("start");
    startbtn.addEventListener("click",speedReader);
    let stopbtn=document.getElementById("stop");
    stopbtn.addEventListener("click",stopSpeedReader);
    let speedValue=document.getElementById("SpeedMenu");
    speedValue.addEventListener("click",checkSpeed);
    let sizeValue=document.getElementById("changeSize");
    sizeValue.addEventListener("click",checkSize);
  }
  function speedReader(){
    document.getElementById("stop").disabled=false;
    document.getElementById("start").disabled=true;
    clickCount+=1;
    if(clickCount>=2){
      return;
    }
    let para=document.getElementById("inputText").value;
    index=0;
    result=para.split(/[ \t\n]+/);
    play=setInterval(textmessage,delay);
  }
  function stopSpeedReader(){
    clickCount=0;
    clearInterval(play);
    let display=document.getElementById("heading");
    display.innerHTML="";
    document.getElementById("stop").disabled=true;
    document.getElementById("start").disabled=false;
  }
  function checkSpeed(){
    delay=document.getElementById("SpeedMenu").value;
    if(clickCount!=0){
      clearInterval(play);
      play=setInterval(textmessage,delay);
    }
  }
  function checkSize(){
    let display=document.getElementById("heading");
    let fontelement=[document.getElementById("36pt"),document.getElementById("48pt"),document.getElementById("60pt")];
    for(var i =0; i<fontelement.length; i++){
      if(fontelement[i].checked==true){
        display.style.fontsize=fontelement[i].value+"pt";
        display.innerHTML=fontelement[i].value;
        if(clickCount!=0){
          clearInterval(play);
          play=setInterval(textmessage,delay);
       }
      }
    }
  }
  function textmessage(){
    if(index>=result.length){
      stopSpeedReader();
    }
    else{
      let display=document.getElementById("heading");
      display.innerHTML=result[index++];
    }
  }
})();