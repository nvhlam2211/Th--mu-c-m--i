const text = document.querySelector(".sorry");
const textAno = document.querySelector(".text");
const load = () => {
  setTimeout(() => {
    text.textContent = "vì những lời hứa";
  }, 0);
  setTimeout(() => {
    text.textContent = "chẳng yêu được nữa";
  }, 3000);
  setTimeout(() => {
    text.textContent = "vì em chẳng thể";
  }, 6000);
  setTimeout(() => {
    textAno.textContent = "";
    text.textContent = "Bên cạnh anh mỗi khi trời đổ mưa ...";
  }, 9000);
  setTimeout(() => {
    textAno.textContent = "Xin nỗi";
    text.textContent = "vì em đã đúng";
  }, 12000);
  setTimeout(() => {
    textAno.textContent = "Xin nỗi";
    text.textContent = "vì anh đã sai";
  }, 15000);
  setTimeout(() => {
    textAno.textContent = "Xin nỗi";
    text.textContent = "vì ta chẳng thể đi";
  }, 18000);
  setTimeout(() => {
    textAno.textContent = "";
    text.textContent = "Cùng nhau để bây giờ cách xa ...";
  }, 21000);
};
load();
setInterval(load, 24000);
