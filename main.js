console.log("YOOO")


var timerEl = document.querySelector(".timer")
var counterVal= 1500
var completeEl= document.querySelector(".complete")
var textBox= document.querySelector(".output-textbox")
// console.log(completeEl)



var countBack= setInterval(function(){
  var seconds=counterVal
  var minutes= Math.floor(counterVal/60);
  var secondsLeft=counterVal-(minutes*60)
  if (secondsLeft < 10){
    secondsLeft= "0" + secondsLeft;
  }
  counterVal--
  timerEl.innerHTML=minutes+ ":" + secondsLeft
    if(counterVal === 0 ) {
      clearInterval(countBack)
      completeEl.style.fontSize="40px"
      timerEl.style.display="none"
      textBox.style.display="none"
      }
}, 10)

var inputValue=document.querySelector(".input-textbox input")
var buttonEl= document.querySelector(".input-textbox button")
var outputEl=document.querySelector(".output-textbox")

buttonEl.addEventListener("click", function(evt){
  outputEl.innerHTML=inputValue.value
})



// var timerEl = document.querySelector(".timer")
// var counterVal= 25
//
// var countBack= setInterval(function(){
//   counterVal--
//   timerEl.innerHTML=counterVal
//     if(counterVal === 0 ) {
//       clearInterval(countBack)}
// }, 1000)
