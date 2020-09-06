var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');
var type = document.querySelector('.type');
var reset = document.querySelector('#reset');
var count = 0;

for(var i = 0; i< left.length; i++){
    left[i].addEventListener("click", () => {
        count += 1;
    }, {once: true})
}
    

for(var i = 0; i< right.length; i++){
    right[i].addEventListener("click", () => {
        count -= 1;
    }, {once: true})
}

result.addEventListener("click", () => {
    if(count >=1){
        type.textContent = "여유를 즐기는";
    }else{
        type.textContent = "활발하고 즉흥적인";
    }
})