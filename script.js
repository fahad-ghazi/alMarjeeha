const words = document.querySelector(".move-text");
let i = 0;
let speed = 500;
const txt = "لا يقدر بثمن";
const isWrite = true;

function typeWriter() {
  if (i < txt.length) {
    words.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();
