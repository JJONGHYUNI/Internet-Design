"use strict";
(function(){
  var $ =function(id){return document.getElementById(id);};
  var $$ =function(id) {return document.getElementsByClassName(id);};
  window.onload=function(){
    let clickBox=$$("box");
    let clearBut=$('clear');
    for (var i = 0; i<clickBox.length; i++){
      clickBox[i].addEventListener("click",clicking);
    }
    clearBut.addEventListener("click",clearAll);
  }
  function clicking(){
    alert("You clicked tile!");
    if(this.classList.contains('filled')){
      this.classList.remove('filled');
      this.classList.add('X-out');
    }
    else if(this.classList.contains('X-out')){
      this.classList.remove('X-out');
    }
    else{
      this.classList.add('filled');
        }
  }
  function clearAll(){
    let result = confirm("Are you sure you want to clear it?");
    if (result==true){
    let clickB=$$("box");
      for (var i = 0; i<clickB.length; i++){
        clickB[i].classList.remove('filled');
        clickB[i].classList.remove('X-out');
      }      
    }
    else{
      return;
    }
  }
})();