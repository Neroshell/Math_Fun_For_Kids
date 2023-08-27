
const answerElement = document.querySelector(".answer-1");
const fakeAnswer = document.querySelector(".dummy_1");
const fakeAnswer2 = document.querySelector(".dummy_2");
var result = 0;


function equation() {
    
    var firstNumber = document.querySelector(".num-1");
    var secondNumber = document.querySelector(".num-2");
    var num1 = Math.floor(Math.random() * 15);
    var num2 = Math.floor(Math.random() * 15);
    var dummy = Math.floor(Math.random() * 15);
    var dummy2 = Math.floor(Math.random() * 15);
    result = num1 - num2;
    var allAnswer = [result, dummy, dummy2];
    var switchAnswer = [];
   
    for (var i = allAnswer.length; i > 0; i--) {
        var randomPick = Math.floor(Math.random() * i);
        var newPick = allAnswer.splice(randomPick, 1)[0];
        switchAnswer.push(newPick);
    }

    firstNumber.innerHTML = num1;
    secondNumber.innerHTML = num2;
    answerElement.innerHTML = switchAnswer[0];
    fakeAnswer.innerHTML = switchAnswer[1];
    fakeAnswer2.innerHTML = switchAnswer[2];
}

equation();

let remark = document.querySelector('.remark');
var audio = new Audio("audio/buzzer.mp3");
answerElement.addEventListener('click', function (){
   if (answerElement.innerHTML == result){
        remark.style.opacity = '1';
        remark.innerHTML = "Correct answer, Well done!"
        setTimeout(function () {
            remark.style.opacity = '0';
        equation();
   }, 2000);
   }else{
    audio.play();
    
}
});

fakeAnswer.addEventListener('click', function (){
    if (fakeAnswer.innerHTML == result){
        remark.innerHTML = "Correct answer, Well done!"
        remark.style.opacity = '1';
        setTimeout(function () {
            remark.style.opacity = '0';
            equation();
       }, 2000);
       
   }else{
    
    audio.play();

  }
});

fakeAnswer2.addEventListener('click', function (){
    if (fakeAnswer2.innerHTML == result){
        remark.innerHTML = "Correct answer, Well done!"
        remark.style.opacity = '1';
        setTimeout(function () {
            remark.style.opacity = '0';
            equation();
       }, 2000);
   }else{
   
        audio.play();
   }

});
    




document.addEventListener('DOMContentLoaded', function() {
    var bar = document.querySelector("#bar");
    bar.addEventListener("click", openNav);

    function openNav() {
    
        document.getElementById("mySidenav").style.width = "60%";
    }

    var close = document.getElementById("closeNav");
    close.addEventListener("click", closeNav);

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
});
