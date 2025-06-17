const form = document.querySelector('form');
const bmi = document.querySelector('#results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height < 0 || isNaN(height)) {
    bmi.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    bmi.innerHTML = `Plase enter a valid weight`;
  } else {
    const bmiVal = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmiVal < 18.6) {
      bmi.innerHTML = `<span>Your BMI is ${bmiVal} \nand you are underweight</span>`;
    } else if (bmiVal > 18.6 && bmiVal < 24.9) {
      bmi.innerHTML = `<span>Your BMI is ${bmiVal} \nand you are fit</span>`;
    } else {
      bmi.innerHTML = `<span>Your BMI is ${bmiVal} \ntry to move your head \nleft and right when someone offers food</span>`;
    }
  }
});
