let xLine = 10;
let yLine = 10;
let a = setInterval(moveRight, 20);

function moveRight() {

    $('#move').offset({ left: xLine });
    $('#move').offset({ top: yLine });

    xLine++;
    let bb = setTimeout(moveDown, 4000);
    if (xLine > 200) {
        clearInterval(a);
    }
}

function moveDown() {
    $('#move').offset({ top: yLine });
    yLine++;
    let cc = setTimeout(moveLeft, 4000);
}

function moveLeft() {
    $('#move').offset({ left: xLine });
    xLine--;
    let dd = setTimeout(moveUp, 4000);
}

function moveUp() {
    $('#move').offset({ top: yLine });
    yLine--;
    let aa = setTimeout(moveRight, 4000);
}