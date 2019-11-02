
let b;
let moveHeadingLeft = function(){
    $('#heading').offset({left : leftOffset});
    leftOffset--;
    if(leftOffset < 0){
        clearInterval(b);
    }
}
b = setInterval(moveHeadingRight, 30);