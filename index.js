process.title = `ARVIS DDoS V0.0.1`;
var readline = require('readline');
const colors = require('colors');

var amix = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

amix.question("Lütfen Sahte Bir IP/URL Gir ", function(answer) {
  setInterval(() => {
    process.title = `⡿ Alkan`;
    setTimeout(function(){ 
      process.title = `⣟ Alkan`;
    }, 50);
    setTimeout(function(){ 
      process.title = `⣯ Alkan`;
    }, 100);
    setTimeout(function(){ 
      process.title = `⣷ Alkan`;
    }, 150);
    setTimeout(function(){ 
      process.title = `⣾ Alkan`;
    }, 200);
    setTimeout(function(){ 
      process.title = `⣽ Alkan`;
    }, 250);
    setTimeout(function(){ 
      process.title = `⣻ Alkan`;
    }, 300);
    setTimeout(function(){ 
      process.title = `⢿ Alkan`;
    }, 350);
  }, 400);

  setInterval(function() {
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    console.log("Şuradan ".yellow +ip.white+ " DDoS Gönderildi ==> ".yellow +answer.white)
  }, 5);
});









//Alkan