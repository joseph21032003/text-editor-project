let butn1 = document.getElementById("b1");
let butn2 = document.getElementById("b2");
let butn3 = document.getElementById("b3");
let butn4 = document.getElementById("b4");
let butn5 = document.getElementById("b5");
let butn6 = document.getElementById("b6");
let butn7 = document.getElementById("b7");
let butn8 = document.getElementById("b8");
let butn9 = document.getElementById("b9");
let butn10 = document.getElementById("b10");


butn1.addEventListener("mouseover", function () {
    butn1.style.backgroundColor = "#098907";
    butn1.style.color = "white";
});
butn1.addEventListener("mouseout", function () {
    butn1.style.backgroundColor = "#8cc98b";
    butn1.style.color = "#064504"
});

butn2.addEventListener("mouseover", function () {
    butn2.style.backgroundColor = "#098907";
    butn2.style.color = "white";
});
butn2.addEventListener("mouseout", function () {
    butn2.style.backgroundColor = "#8cc98b";
    butn2.style.color = "#064504"
});

butn3.addEventListener("mouseover", function () {
    butn3.style.backgroundColor = "#098907";
    butn3.style.color = "white";
});
butn3.addEventListener("mouseout", function () {
    butn3.style.backgroundColor = "#8cc98b";
    butn3.style.color = "#064504"
});

butn4.addEventListener("mouseover", function () {
    butn4.style.backgroundColor = "#098907";
    butn4.style.color = "white";
});
butn4.addEventListener("mouseout", function () {
    butn4.style.backgroundColor = "#8cc98b";
    butn4.style.color = "#064504"
});

butn5.addEventListener("mouseover", function () {
    butn5.style.backgroundColor = "#098907";
    butn5.style.color = "white";
});
butn5.addEventListener("mouseout", function () {
    butn5.style.backgroundColor = "#8cc98b";
    butn5.style.color = "#064504"
});

butn6.addEventListener("mouseover", function () {
    butn6.style.backgroundColor = "#098907";
    butn6.style.color = "white";
});
butn6.addEventListener("mouseout", function () {
    butn6.style.backgroundColor = "#8cc98b";
    butn6.style.color = "#064504"
});

butn7.addEventListener("mouseover", function () {
    butn7.style.backgroundColor = "#098907";
    butn7.style.color = "white";
});
butn7.addEventListener("mouseout", function () {
    butn7.style.backgroundColor = "#8cc98b";
    butn7.style.color = "#064504"
});

butn8.addEventListener("mouseover", function () {
    butn8.style.backgroundColor = "#098907";
    butn8.style.color = "white";
});
butn8.addEventListener("mouseout", function () {
    butn8.style.backgroundColor = "#8cc98b";
    butn8.style.color = "#064504"
});
butn9.addEventListener("mouseover", function () {
    butn9.style.backgroundColor = "#098907";
    butn9.style.color = "white";
});
butn9.addEventListener("mouseout", function () {
    butn9.style.backgroundColor = "#8cc98b";
    butn9.style.color = "#064504"
});
butn10.addEventListener("mouseover", function () {
    butn10.style.backgroundColor = "#098907";
    butn10.style.color = "white";
});
butn10.addEventListener("mouseout", function () {
    butn10.style.backgroundColor = "#8cc98b";
    butn10.style.color = "#064504"
});

function format(command) {
  document.execCommand(command, false, null);
  saveState();
}

function changeColor(color) {
  document.execCommand('foreColor', false, color);
  saveState();
}

function alignText(direction) {
  document.getElementById('editor').style.textAlign = direction;
  saveState();
}

let undoStack = [];
let redoStack = [];

const editor = document.getElementById('editor');

function saveState() {
  undoStack.push(editor.innerHTML);
  redoStack = [];
}

function undoAction() {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop());
    editor.innerHTML = undoStack[undoStack.length - 1];
  }
}

function redoAction() {
  if (redoStack.length > 0) {
    const state = redoStack.pop();
    undoStack.push(state);
    editor.innerHTML = state;
  }
}


window.onload = () => {
  saveState();
};
