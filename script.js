// let leftOffset = 0;
// let a;
// let moveHeadingRight = function(){
//     $('#heading').offset({left : leftOffset});
//     leftOffset += 1;
//     if(leftOffset > 200){
        // leftOffset = 0;
        // clearInterval(a);
        // $('#heading').offset({left : leftOffset});
        // leftOffset--;
        // if(leftOffset < 0){
        //     clearInterval(a);
        // }
//     }
// }
// a = setInterval(moveHeadingRight, 30);

let clickHandler = function(event){
    console.log('Клік! ' + event.pageX + ' ' + event.pageY);
}
$('h1').click(clickHandler);