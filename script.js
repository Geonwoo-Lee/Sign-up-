// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username')
let elFailMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elPassword = document.querySelector('#password')
let elPasswordRetype = document.querySelector('#password-retype')
let elMissMatchMessage = document.querySelector('.mismatch-message')
let elHeader = document.querySelector('#header')
let elTravel = document.querySelector('.wrap')
let elSignup = document.querySelector('.form-signup')
let elClickSignup = document.querySelector('.sign-btn')

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

elInputUsername.onkeyup = function(){
  if(isMoreThan4Length(elInputUsername.value,)){
    elSuccessMessage.classList.remove('hide')
    elFailMessage.classList.add('hide')
  } else {
    elSuccessMessage.classList.add('hide')
    elFailMessage.classList.remove('hide')
  }
}

function isMatch (elPassword, elPassworRetype) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return elPassword === elPassworRetype
}

elPasswordRetype.onkeyup = function(){
  if(isMatch(elPassword.value, elPasswordRetype.value)){
    elMissMatchMessage.classList.add('hide')
  }else {
    elMissMatchMessage.classList.remove('hide')
  }
}

elHeader.onclick = function(){
  return window.location.reload()
}

elTravel.onclick = function(){
  elTravel.classList.add('hide')
  elSignup.classList.remove('hide')
}

elClickSignup.onclick = function(){
  if (!isMoreThan4Length(elInputUsername.value)) {  
    alert ('아이디를 확인해주세요.');
  } else if (isMoreThan4Length(elInputUsername.value) && !isMatch(elPassword.value, elPasswordRetype.value)) {
    alert ('비밀번호를 확인해주세요.')  
  } else {
    alert ('회원가입이 되었습니다.')
  }
}

