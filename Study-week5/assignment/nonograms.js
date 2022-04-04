"use strict";
(function(){
  // 전역 변수로 dom을 간편하게 불러옴
  var $ =function(id){return document.getElementById(id);};
  var $$ =function(id) {return document.getElementsByClassName(id);};
  window.onload=function(){
    let clickBox=$$("box");
    let clearBut=$('clear');
    // box를 클릭했을 경우 개별 박스에 대해서 clicking함수 진행
    for (var i = 0; i<clickBox.length; i++){
      clickBox[i].addEventListener("click",clicking);
    }
    // 클리어 버튼을 클릭했을 경우 clearAll함수 진행
    clearBut.addEventListener("click",clearAll);
  }
  // 박스 클릭시 진행되는 함수
  function clicking(){
    // 클릭한 타일에 대한 경보창
    alert("You clicked tile!");
    // filled class가 있을 경우 filled class를 지우고 x-out class를 추가함.
    if(this.classList.contains('filled')){
      this.classList.remove('filled');
      this.classList.add('X-out');
    }
    // xout 클래스가 있을 경우 제거해줘서 공백으로 만들어줌.
    else if(this.classList.contains('X-out')){
      this.classList.remove('X-out');
    }
    // 둘다 아닌경우엔 filled 클래스를 추가하여 검은색 배경을 칠해줌.
    else{
      this.classList.add('filled');
        }
  }
  // 클리어버튼 클릭시 진행되는 함수
  function clearAll(){
    // 사용자가 정말 화면을 클리어를 할지 물어봄.
    let result = confirm("Are you sure you want to clear it?");
    // yes 선택시 화면을 클리어 해줌.
    if (result==true){
      let clickB=$$("box");
      for (var i = 0; i<clickB.length; i++){
        clickB[i].classList.remove('filled');
        clickB[i].classList.remove('X-out');
      }      
    }
    // 아니요 클릭했을 경우 변동 없음.
    else{
      return;
    }
  }
})();