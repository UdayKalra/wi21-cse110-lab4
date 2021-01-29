function sayTime() {
    let d = new Date();
    let time = d.toLocaleString();
    console.log(time);
}
var intervalId = global.setInterval(function(){
    sayTime();
  }, 1000);