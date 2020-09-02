var startBtn = document.querySelector('#startBtn');
var word = document.querySelector('.word');
var score = document.querySelector('#score');
var input = document.querySelector('#input');
var checkBtn = document.getElementById('checkBtn');
var comment = document.querySelector('#comment');
var goodSound = new Audio('good.wav');
var badSound = new Audio('bad.wav');
var scoreSet = 0;
var wordList = ['time','year','people','way','day','man','thing','woman','life','child','world',
    'school','state','family','student','group','country','problem','hand','part','place',
    'week','company','system','program','question','work','government'];

startBtn.addEventListener("click", function(){
    function randomWord(){
        var random = Math.floor(Math.random() * wordList.length);
        return wordList[random];
    }
    word.textContent = randomWord();
});

checkBtn.addEventListener("click", function(){
    if(input.value == word.textContent){
        comment.textContent = 'Right!!!';
        score.textContent = scoreSet+=1;
        goodSound.play();
    }else if(input.value){
        comment.textContent = 'Wrong!!! score-1';
        score.textContent = scoreSet-=1;
        badSound.play();
    }else{
        comment.textContent = 'Type something!';
    }
})