let xLine = 0;
let yLine = 0;
let a, b, c, d;
a = setInterval(moveRight, 100);
function moveRight(){
    $('#move').offset({left : xLine});
    xLine++;
    bb = setTimeout(moveDown, 21000);
    if(xLine > 200){
        clearInterval(a);
    }   
}



function moveDown(){
    $('#move').offset({top : yLine});
    yLine++;
    cc = setTimeout(moveLeft, 21000);
    if(yLine > 200){
        clearInterval(b);
    }   
}

//b = setInterval(moveDown, 100);


function moveLeft(){
    $('#move').offset({left : xLine});
    xLine--;
    dd = setTimeout(moveUp, 21000);
    if(xLine < 0){
        clearInterval(c);
    }
}

//c = setInterval(moveLeft, 100);


function moveUp(){
    $('#move').offset({top : yLine});
    yLine--;
    aa = setTimeout(moveRight, 21000);
    if(yLine < 0){
        clearInterval(d);
    }   
}

//d = setInterval(moveUp, 100);
