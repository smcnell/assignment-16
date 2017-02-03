console.log("YOOO")


var timerEl = document.querySelector(".timer")
var counterVal= 25

var countBack= setInterval(function(){
  counterVal--
  timerEl.innerHTML=counterVal
    if(counterVal === 0 ) {
      clearInterval(countBack)}
}, 1000)
