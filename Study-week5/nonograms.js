"use strict";
(function(){
  // dom을 쉽게 받기 위해 전역변수로 선언
  var $ =function(id){return document.getElementById(id);};
  var $$ =function(id) {return document.getElementsByClassName(id);};
  window.onload=function(){
    let clickBox=$$("box");
    let clearBut=$('clear');
    // 개별 박스에 대하여 클릭 이벤트시 clicking 함수 실행
    for (var i = 0; i<clickBox.length; i++){
      clickBox[i].addEventListener("click",clicking);
    }
    // 클리어버튼 클릭 이벤트시 clearAll 함수 실행
    clearBut.addEventListener("click",clearAll);
  }
  // 타일 클릭시 진행되는 함수
  function clicking(){
    alert("You clicked tile!");
    // 타일에 filled 클래스가 포함되어있을 시 수행
    if(this.classList.contains('filled')){
      // filled클래스는 지우고 x-out클래스를 더해줌
      this.classList.remove('filled');
      this.classList.add('X-out');
    }
    // 타일에 x-out클래스가 포함 되어있을 시 수행
    else if(this.classList.contains('X-out')){
      // x-out 클래스를 삭제하여 공백으로 만들어줌
      this.classList.remove('X-out');
    }
    // 둘다 아닐경우 filled클래스를 추가
    else{
      this.classList.add('filled');
        }
  }
  // clear버튼 클릭시 진행되는 함수
  function clearAll(){
    // 사용자가 정말로 지울것인지 창을 물어봄.
    let result = confirm("Are you sure you want to clear it?");
    // yes 선택시 모든타일에 대해 class를 지워줌
    if (result==true){
      let clickB=$$("box");
      for (var i = 0; i<clickB.length; i++){
        clickB[i].classList.remove('filled');
        clickB[i].classList.remove('X-out');
      }      
    }
    // no 선택시 그대로 납둠.
    else{
      return;
    }
  }
})();