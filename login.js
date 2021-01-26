const form = document.getElementById("loginForm");
const userEmail = document.getElementById("userEmail");
const userPw = document.getElementById("userPassword");

// 가상 사용자
var user = [
  ["aaa@google.com", 1234],
  ["bbb@google.com", 5678],
  ["ccc@google.com", 9012]
];

function showError(inputForm, errShow, err) {
  inputForm.style.border = "1px solid red";
  errShow.style.color = "red";
  errShow.innerHTML = err;
}
function clear(inputForm, errShow) {
  inputForm.style.border = "1px solid black";
  errShow.innerHTML = "";
}
// 이메일 형식 확인
function checkEmail(emailForm) {
  const formControl = emailForm.parentElement;
  var errShow = formControl.querySelector("small");
  var err;
  var emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  var email = emailForm.value;

  clear(emailForm, errShow);

  // 이메일을 입력하지 않으면
  if (email.length == 0) {
    err = "이메일 주소를 입력하세요";
    showError(emailForm, errShow, err);
    return false;
  }
  // 이메일 정규표현식을 만족하지 않으면
  else if (!emailReg.test(email)) {
    err = "이메일 형식을 만족하지 않습니다";
    showError(emailForm, errShow, err);
    return false;
  }
  return true;
}
// 비밀번호 형식 확인
function checkPassword(passwordForm) {
  const formControl = passwordForm.parentElement;
  var errShow = formControl.querySelector("small");
  var err;

  var password = passwordForm.value;
  clear(passwordForm, errShow);

  //비밀번호를 입력하지 않으면
  if (password.length == 0) {
    err = "비밀번호를 입력하세요";
    showError(passwordForm, errShow, err);
    return false;
  }
  return true;
}
// 사용자 확인
function checkUser(emailForm, passwordForm) {
  for (var i = 0; i < user.length; i++) {
    if (user[i][0] == emailForm.value && user[i][1] == passwordForm.value)
      return true;
  }
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkEmail(userEmail) && checkPassword(userPw)) {
    if (checkUser(userEmail, userPw)) {
      alert("로그인 성공!");
    } else {
      alert("등록되지 않은 사용자이거나 비밀번호가 틀렸습니다.");
    }
  }
});
