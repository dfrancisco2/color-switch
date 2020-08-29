const onButton = document.querySelector(".on-button");
const offButton = document.querySelector(".off-button");
const bodyColor = document.querySelector("body");
const blockAColor = document.querySelector(".block-a");
const blockBColor = document.querySelector(".block-b");
const blockCColor = document.querySelector(".block-c");
const blockDColor = document.querySelector(".block-d");
const blockEColor = document.querySelector(".block-e");
const blockFColor = document.querySelector(".block-f");
const blockGColor = document.querySelector(".block-g");
const blockHColor = document.querySelector(".block-h");

onButton.addEventListener("click", function () {
  blockAColor.style.backgroundColor = "#45eba5";
  blockBColor.style.backgroundColor = "#21aba5";
  blockCColor.style.backgroundColor = "#1d566e";
  blockDColor.style.backgroundColor = "#163a5f";
  blockEColor.style.backgroundColor = "#ff6464";
  blockFColor.style.backgroundColor = "#ff8264";
  blockGColor.style.backgroundColor = "#ffaa64";
  blockHColor.style.backgroundColor = "#fff5a5";
  bodyColor.style.backgroundColor = "white";
});

offButton.addEventListener("click", function () {
  blockAColor.style.backgroundColor = "black";
  blockBColor.style.backgroundColor = "black";
  blockCColor.style.backgroundColor = "black";
  blockDColor.style.backgroundColor = "black";
  blockEColor.style.backgroundColor = "black";
  blockFColor.style.backgroundColor = "black";
  blockGColor.style.backgroundColor = "black";
  blockHColor.style.backgroundColor = "black";
  bodyColor.style.backgroundColor = "#030202";
});
