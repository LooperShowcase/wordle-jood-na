//wpw.js

let number = 55;
let number2 = 55;
let number3 = 54;

if ((number + number2 + number3) / 3 == 55) {
  console.log("On the edge");
} else if ((number + number2 + number3) / 3 > 55) {
  console.log("Winner!");
} else if ((number + number2 + number3) / 3 < 55) {
  console.log("Try again");
}

if ((327 % 100) - (357 % 10) == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let arr = [];

for (let i = 0; i++, i != 11; ) {
  arr.push(i);
}

console.log(arr);
console.log(arr.join("\n"))


//main.js


let Title = document.getElementById("Title");
Title.innerHTML = "Jood Nasser";
Title.style.color = "blue";
document.body.style.backgroundColor = "black";
Title.style.textAlign = "center";

let HI = document.createElement("h1");
HI.style.color = "white";
HI.innerHTML = "TESTING";

//server.js

console.log("This is my server");

console.log("is it?");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/comicsans");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
