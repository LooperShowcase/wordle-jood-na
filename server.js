const express = require("express");
const server = express();
server.use(express.static("public"));
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log("Running Server on Port 3000");
});
const WRDLanswer = 'bread'
server.get("/guess/:word", (request, response) => {
  const inputWord = request.params.word;
  const arr = []
 
  for (let i = 0; i < inputWord.length; i++) {
 const ch = inputWord[i]
    if(ch == WRDLanswer[i]){
      arr.push(1)
    } else if(WRDLanswer.includes(ch)){
      arr.push(0)
    } else {
      arr.push(-1)
    }
    console.log(inputWord[i]);
  }
  response.json(arr);
});

server.get("/vecna/cursed/chrissy", (request, response) => {
  response.send(
    "chrissy wake up \n i don't like this \n chrissy wake up \n hey? hello? \n time to wake up \n time to wake up \n time to wake up \n time to wake up \n i don't like this \n chrissy wake up"
    );
  });
