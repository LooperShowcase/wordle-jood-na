let MyName = [];
MyName.push(event.key);
if (
  MyName[0] == "j" &&
  MyName[1] == "o" &&
  MyName[2] == "o" &&
  MyName[3] == "d"
) {
  alert("JOOOOOOOOOOOOOOD");
  console.log(MyName[(0, 1, 2, 3)]);
}

if (event.key == "r") {
  alert("IT WAS R RUN");
}

if (
  firstWord.children[0].innerHTML == "Backspace" ||
  firstWord.children[0].innerHTML == "Delete" ||
  firstWord.children[0].innerHTML == "ArrowUp" ||
  firstWord.children[0].innerHTML == "ArrowDown" ||
  firstWord.children[0].innerHTML == "ArrowLeft" ||
  firstWord.children[0].innerHTML == "ArrowRight" ||
  firstWord.children[0].innerHTML == "Space" ||
  firstWord.children[0].innerHTML == "Control" ||
  firstWord.children[0].innerHTML == "Enter"
) {
  firstWord.children[0].innerHTML = "Null";
}

if (event.code.codePointAt(0) >= 77 && event.code <= 122) {
}
