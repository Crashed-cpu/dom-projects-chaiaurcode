const button = document.querySelectorAll('.button');
const back = document.querySelector('body');

// const body = document.querySelector("body")

button.forEach(function (buttons) {
  // console.log(buttons);
  buttons.addEventListener('click', function (event) {
    // console.log(event);
    // console.log(event.target);
    switch (event.target.id) {
      case 'grey':
        back.style.backgroundColor = event.target.id;
        break;
      case 'white':
        back.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        back.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        back.style.backgroundColor = event.target.id;
        break;
      default:
        break;
    }
  });
});
