console.log("YOOO")
var inputValue=document.querySelector(".input-textbox input")
var buttonEl= document.querySelector(".input-textbox button")
var outputEl=document.querySelector(".output-textbox")
var fakeTimerEl= document.querySelector(".fake-timer")
var friedGreenEl= document.querySelector(".green-tomato")
var tomatoEl= document.querySelector(".tomato-pic")

buttonEl.addEventListener("click", function(evt){
  outputEl.innerHTML=inputValue.value;
  fakeTimerEl.style.display="none"
  inputValue.style.display="none"
  buttonEl.style.display="none"
})

var timerEl = document.querySelector(".timer")
var counterVal= 1500
var completeEl= document.querySelector(".complete")
var textBox= document.querySelector(".output-textbox")
// console.log(completeEl)


buttonEl.addEventListener("click", function(countBack){
var countBack= setInterval(function(){
  var seconds=counterVal
  var minutes= Math.floor(counterVal/60);
  var secondsLeft=counterVal-(minutes*60)
  if (minutes < 1){
    friedGreenEl.style.display="initial";
    tomatoEl.style.display="none";
    timerEl.style.backgroundColor= "#f2df37";
    timerEl.style.color="#fff";
  }
if (secondsLeft < 10){
    secondsLeft= "0" + secondsLeft;
  }

//-------------
  counterVal--
  timerEl.innerHTML=minutes+ ":" + secondsLeft
    if(counterVal === 0 ) {
      clearInterval(countBack)
      friedGreenEl.style.display="none";
      tomatoEl.style.display="initial"

      completeEl.style.fontSize="40px"
      timerEl.style.display="none"
      textBox.style.display="none"
      outputEl.style.display="none"
      }
}, 1000)
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
