let xLine = 0,
    yLine = 0,
    step = 25,
    a, b, c, d;
let toMove = document.getElementById('move');



function moveRight() {

    toMove.style.marginLeft = xLine + "px";
    if (xLine > 200) {
        clearInterval(a);
        b = setInterval(moveDown, step);
    }
    xLine++;
}

function moveDown() {
    toMove.style.marginTop = yLine + 'px';
    if (yLine > 200) {
        clearInterval(b);
        c = setInterval(moveLeft, step);
    }
    yLine++;
}

function moveLeft() {
    toMove.style.marginLeft = xLine + "px";
    if (xLine <= 0) {
        clearInterval(c);
        d = setInterval(moveUp, step);
    }
    xLine--;
}

function moveUp() {
    toMove.style.marginTop = yLine + 'px';
    if (yLine <= 0) {
        clearInterval(d);
        a = setInterval(moveRight, step);
    }
    yLine--;
}

document.getElementById('start').onclick = function() {
    a = setInterval(moveRight, step);
}

let stopButton = document.getElementById('stop').onclick = function() {
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
}

// document.getElementById('move').onclick = function() {

//     if (a = setInterval(moveRight, step)) {
//         clearInterval(a);
//         step = step - 10;
//         a = setInterval(moveRight, step);
//         if (step < 20) {
//             alert('You are win!!!!Congrets!!!!');
//         }
//     } else if (b = setInterval(moveDown, step)) {
//         clearInterval(b);
//         step = step - 10;
//         b = setInterval(moveDown, step);
//         if (step < 20) {
//             alert('You are win!!!!Congrets!!!!');
//         }
//     } else if (c = setInterval(moveLeft, step)) {
//         clearInterval(c);
//         step = step - 10;
//         c = setInterval(moveLeft, step);
//         if (step < 20) {
//             alert('You are win!!!!Congrets!!!!');
//         }
//     } else if (d = setInterval(moveUp, step)) {
//         clearInterval(d);
//         step = step - 10;
//         d = setInterval(moveUp, step);
//         if (step < 20) {
//             alert('You are win!!!!Congrets!!!!');
//         }

//     }

// }