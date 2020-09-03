var changeBtn = document.querySelector('#changeBtn');
var character = document.querySelector('#character');
var Qtext = document.getElementById('Qtext');
var sendBtn = document.querySelector('#sendBtn');
var input = document.querySelector('.input');

var changeList = ['👻', '🙈', '🐳', '🦄', '🎅','😀','🐶'];
var questionList = ['When is your birthday?','What was your last night dream?','What is your favorite movie?','What is your favorite color?'];


changeBtn.addEventListener("click", function(){
    function randomCharacter(){
        var random = Math.floor(Math.random() * changeList.length);
        return changeList[random];
    }
    character.textContent = randomCharacter();
});

sendBtn.addEventListener("click", function(){
    function randomQuestion(){
        var random = Math.floor(Math.random() * questionList.length);
        return questionList[random];
    }
    Qtext.textContent = randomQuestion();
    input.value = '';
});
