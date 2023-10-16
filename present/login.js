var btn = document.querySelector(".btn");
var login = document.querySelector(".login");
var hidden = document.querySelector(".close");
var overlay = document.querySelector(".overlay");
var userName = document.querySelector(".username");
var passWord = document.querySelector(".password");
var submit = document.querySelector(".chose");
btn.addEventListener('click', function (){
    login.classList.add("show");
    if (typeof userName === '' || typeof passWord === ''){
     alert("Vui lòng không để trống");
    }
});
hidden.addEventListener('click', function (){
    login.classList.remove("show");
});
overlay.addEventListener('click', function(){
    login.classList.remove("show");
});
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value === "" || passWord.value === "") {
      alert("vui lòng không để trống");
    } else {
        alert("Đăng Nhập Thành Công");
        window.location.href = "./letter.html";
    }
  });