const fonts = [
"Arial",
    "Georgia",
    "Courier New",
    "Times New Roman",
    "Apple Chancery, cursive",
    "Times New Roman",
    "Courier New",
    "Georgia",
    
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
        }, 5000);
        return;
    }

    if (intervalDelay <= 100) {
        intervalDirection = 0;

        if (!lowerDelayHoldActive) {
            lowerDelayHoldActive = true;
            setTimeout(() => {
                intervalDirection = 1;
                lowerDelayHoldActive = false;
            }, 7000);
        }

        setTimeout(changeFont, 100);
        return;
    }

    setTimeout(changeFont, intervalDelay);
}

setTimeout(changeFont, intervalDelay);