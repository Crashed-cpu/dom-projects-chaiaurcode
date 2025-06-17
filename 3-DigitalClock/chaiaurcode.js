const clock = document.querySelector('#clock');

setInterval(
  function () {
    let dnt = new Date();

    clock.innerHTML = dnt.toLocaleTimeString();
  } // can write 1000 here for every second but i didn't require
);
