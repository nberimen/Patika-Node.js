
const arguments = process.argv.slice(2);

function showArea(r) {
    let area = Math.PI * (r ** 2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
}

showArea(arguments[0] * 1);