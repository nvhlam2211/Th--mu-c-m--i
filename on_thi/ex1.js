var userName = document.querySelector(".name")
var btn = document.querySelector(".btn")
btn.addEventListener('click', (e)=>{
    (e).preventDefault;{
    const userName = (e).target.value;
  if (!validatorjs.validateEmail(userName)) {
    alert("Vui lòng nhập email đúng định dạng");
  }
}
});