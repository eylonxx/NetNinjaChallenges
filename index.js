let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let input = document.querySelector('input');
let tick = document.querySelector('.tick');

input.addEventListener('keyup', () => {
  if (emailRegex.test(input.value)) {
    input.classList.add('valid');
    tick.classList.add('valid-tick');
  } else {
    input.classList.remove('valid');
    tick.classList.remove('valid-tick');
  }
});
