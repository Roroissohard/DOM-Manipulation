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

const listItems = document.querySelectorAll('#mysteryList li');

if (listItems.length > 0) {
  listItems.forEach((item) => {
    item.addEventListener('click', function() {
      let nonClickedCount = 0;

      listItems.forEach((li) => {
        if (li === item) {
          li.className = 'highlight1';
        } else {
          if (nonClickedCount % 2 === 0) {
            li.className = 'highlight-l';
          } else {
            li.className = 'highlightI';
          }
          nonClickedCount++;
        }
      });
    });
  });
}

const title = document.getElementById('glitchTitle');

if (title) {
  setTimeout(() => {
    title.innerText = 'DOM Restored!';
    title.style.color = 'limegreen';
    title.style.fontSize = '40px';
  }, 3000);
}