let x = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.fontSize = x / 750 * 100 + 'px';
console.log(document.documentElement.fontSize)