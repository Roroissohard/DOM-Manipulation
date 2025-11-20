const secretText = document.getElementById('secretText991');
if (secretText) {
  secretText.style.visibility = 'visible';
  secretText.innerText = 'You found me using the DOM!';
}

const button = document.getElementById('weirdButtonX');
const colorPatch = document.querySelector('.colorPatch-z9');
let clickCount = 0;

if (button && colorPatch) {
  button.addEventListener('click', () => {
    clickCount++;

    colorPatch.style.backgroundColor = 'fuchsia';

    button.innerText = clickCount;
  });
}

const box = document.getElementById('box7');

if (box) {
  box.addEventListener('mouseenter', () => {
    box.style.borderRadius = '50%';
  });


  box.addEventListener('mouseleave', () => {
    box.style.borderRadius = '0';
  });

  box.addEventListener('dblclick', () => {
    if (box.style.width === '200px') {
      box.style.width = '100px';
      box.style.height = '100px';
    } else {
      box.style.width = '200px';
      box.style.height = '200px';
    }
  });
}

const input = document.getElementById('decoderInput');
const output = document.getElementById('decodedOutput');

if (input && output) {
  input.addEventListener('input', () => {
    const val = input.value;
    if (val.includes('x')) {
      output.innerText = 'Forbidden letter detected.';
    } else {
      output.innerText = val;
    }
  });
}