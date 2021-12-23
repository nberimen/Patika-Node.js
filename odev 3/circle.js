function circleArea(r) {
  let area = Math.PI * r ** 2;
  console.log(`Yaricapi ${r} olan dairenin alani: ${area}`);
}

function circleCircumference(r) {
  let circumference = 2 * Math.PI * r;
  console.log(`Yaricapi ${r} olan dairenin cevresi: ${circumference}`);
}
module.exports = {
  circleArea,
  circleCircumference,
};
