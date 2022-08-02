//UNCLE DOM SUII
const patrickWords = document.getElementById("words");

const k_linecount = 6;
const k_charcount = 5;
for (let i = 0; i < k_linecount; i++) {
  const DEWORD = document.createElement("div");
  DEWORD.className = "word";

  patrickWords.appendChild(DEWORD);
  for (let i = 0; i < k_charcount; i++) {
    const DELETTA = document.createElement("div");
    DELETTA.innerHTML = "⠀";
    DELETTA.className = "char";

    DEWORD.appendChild(DELETTA);
  }
}
const letters = "qwertyuiopasdfghjklzxcvbnm";
let currentChar = 0;
let currentWord = 0;
document.addEventListener("keyup", async (event) => {
  const firstWord = patrickWords.children[currentWord];
  if (event.code == "Enter") {
    if (currentChar == k_charcount) {
      const inputtedAnswer = getCurrentWord();
      const wordleResult = await  guess(inputtedAnswer);
      colorize(wordleResult);
      console.log(wordleResult);
      currentWord++;
      currentChar = 0;
    }
  } else if (event.code == "Backspace") {
    if (currentChar > 0) {
      currentChar--;
      firstWord.children[currentChar].innerHTML = "";
    }
  } else if (currentChar < k_charcount && isLetter(event.key)) {
    firstWord.children[currentChar].innerHTML = event.key.toLowerCase();
    currentChar++;
  }
  if (currentWord == k_linecount) {
    currentWord = 0;
  }
});

function isLetter(ch) {
  if (ch >= "a" && ch <= "z") {
    return true;
  }
  return false;
}

async function guess(word) {
  const request = await fetch("/guess/" + word);
  const response = await request.json();
  console.log(response);
}

function getCurrentWord() {
  var word = "";
  var wordDiv = document.getElementById("words").children[currentWord];
  for (var i = 0; i < wordDiv.children.length; i++) {
    word = word + wordDiv.children[i].innerHTML;
  }
  return word;
}

function colorize(wordleResult) {
  const wordDiv =
    document.getElementById("words").children[currentWord].children;
  for (let i = 0; i < wordleResult.length; i++) {
    if (wordleResult[i] == 1) {
      wordDiv[i].style.backgroundColor = "green";
    } else if (wordleResult[i] == 0) {
      wordDiv[i].style.backgroundColor = "yellow";
    } else {
      wordDiv[i].style.backgroundColor = "gray";
    }
  }
}

function animateCSS(element, animation, prefix = "animate__") {
  // We create a Promise and return it
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }
    element.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  });
}
