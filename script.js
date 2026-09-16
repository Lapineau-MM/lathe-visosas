const fonts = [
    "Rockwell",
    "Georgia",
    "Times New Roman",
    "Apple Chancery, cursive",
    "Copperplate, fantasy",
    "Brush Script MT, cursive",
    "Futura, sans-serif",
    
];

let currentFont = 0;
let intervalDelay = 100;
let intervalDirection = 1;
let lowerDelayHoldActive = false;

function changeFont() {
    currentFont++;

    if (currentFont >= fonts.length) {
        currentFont = 0;
    }

    document.querySelector("#logo").style.fontFamily =
        fonts[currentFont];

    intervalDelay += intervalDirection * 100;

    if (intervalDelay >= 1000) {
        intervalDirection = 0;
        setTimeout(() => {
            intervalDirection = -1;
            setTimeout(changeFont, intervalDelay);
        }, 3000);
        return;
    }

    if (intervalDelay <= 90) {
        intervalDirection = 0;

        if (!lowerDelayHoldActive) {
            lowerDelayHoldActive = true;
            setTimeout(() => {
                intervalDirection = 1;
                lowerDelayHoldActive = false;
            }, 10000);
        }

        setTimeout(changeFont, 100);
        return;
    }

    setTimeout(changeFont, intervalDelay);
}

setTimeout(changeFont, intervalDelay);