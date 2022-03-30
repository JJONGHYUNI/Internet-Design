"use strict";
//필요한 전역변수 선언
let play;
let index = 0;
let delay = 171;
let clickCount=0;
let delayCount=0;
var result;
//묘듈패턴
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
  //스타트 부분
  function speedReader(){
    document.getElementById("stop").disabled=false;
    document.getElementById("start").disabled=true;
    document.getElementById("inputText").disabled=true;
    clickCount+=1;
    if(clickCount>=2){
      return;
    }
    let para=document.getElementById("inputText").value;
    index=0;
    result=para.split(/[ \t\n]+/);
    play=setInterval(textmessage,delay);
  }
  //멈추는 부분
  function stopSpeedReader(){
    clickCount=0;
    clearInterval(play);
    let display=document.getElementById("heading");
    display.innerHTML="";
    document.getElementById("stop").disabled=true;
    document.getElementById("start").disabled=false;
    document.getElementById("inputText").disabled=false;
  }
  //사용자가 선택한 스피드 적용 부분
  function checkSpeed(){
    delay=document.getElementById("SpeedMenu").value;
    if(clickCount!=0){
      //즉시 적용을 위해서 스피드 변경 후 클리어한 다음 다시 호출
      clearInterval(play);
      play=setInterval(textmessage,delay);
    }
  }
  //사용자가 선택한 사이즈 적용 부분
  function checkSize(){
    let display=document.getElementById("heading");
    let fontelement=[document.getElementById("36pt"),document.getElementById("48pt"),document.getElementById("60pt")];
    for(var i =0; i<fontelement.length; i++){
      if(fontelement[i].checked==true){
        display.style.fontSize=fontelement[i].value+"pt";
        if(clickCount!=0){
          clearInterval(play);
          play=setInterval(textmessage,delay);
       }
      }
    }
  }
  //화면에 띄울 글자를 디스플레이 해주는 부분
  function textmessage(){
    if(index>=result.length){
      stopSpeedReader();
    }
    else{
      checkPunct();
      let display=document.getElementById("heading");
      display.innerHTML=result[index++];
    }
  }
  //구두점을 확인하고 제거해주는 부분.
  function checkPunct(){
    let Pun = result[index];
    let PunLength=result[index].length;
    if(punTrueFalse(result[index])){
      Pun=result[index].replace(/[`.~!@%^&|\\\'\";:\/?]*$/,"");
      result[index]=Pun;
      //딜레이가 중복해서 커지는 걸 막기위해 delaycount를 if해줌.
      if(delayCount==0){
        delayCount+=1
        delay=2*delay;
        clearInterval(play);
        play=setInterval(textmessage,delay);
      }
    }
    else{
      delayCount=0;
      checkSpeed();
      return ;
    }
  }
  //구두점이 있는지 없는지 확인
  function punTrueFalse(str) {
    let punGroup = /[.`~!@#$%^&*|\\\'\";:\/?]/gi;
    if(punGroup.test(str) == true) { 
      return true; 
    } 
    else { 
      return false; 
    } 
  }
})();