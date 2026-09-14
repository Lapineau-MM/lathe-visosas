const fonts = [
    "Arial",
    "Georgia",
    "Courier New",
    "Times New Roman",
    "Apple Chancery, cursive",
    
];

let currentFont = 0;

setInterval(() => {

    currentFont++;

    if (currentFont >= fonts.length) {
        currentFont = 0;
    }

    document.querySelector("#logo").style.fontFamily =
        fonts[currentFont];

}, 100);