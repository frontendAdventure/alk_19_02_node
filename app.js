/* const functions = require('./functions');

console.log("Hi there");

functions.sayHello();

functions.add(2,3); */

/* const handler = (request, response) => {
    console.log("sample message");
    response.end('Hello world');
}

const http = require("http");
const server = http.createServer(handler);
const port = 3000;

server.listen(port, ()=>{
    console.log(`Serwer działa na porcie ${port}`);
}); */



const express = require("express");
const functions = require("./functions");
const app = express();
const port = process.env.PORT || 3000;   // heroku || local
const path = require("path");
const zz = 11;



/* app.get("/", function(request, response){
    response.send("<h1>Strona główna</h1>");
});

app.get("/about", function(request, response){
    response.send("<h2>Strona o mnie</h2>");
}); */

app.set('view engine', 'hbs');

app.use("/assets", express.static(path.join(__dirname, "./assets"))); //__dirname -ścieżka przed asset jest automatycznie pobrana

app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function(request, response){
    response.render("index", {
        pageTitle: "Lekcja ALK 19.02 node.js",
        subTitle: "Podtytuł",
        x : 4,
        y : zz > 9 ? functions.add(1,2) : null
    });
});

app.get("/about", function(request, response){
    response.render("about");
});

app.listen(port, ()=>{
    console.log(`Serwer działa na porcie ${port}`);
});



