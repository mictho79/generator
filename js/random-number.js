(function () {
  const form = document.getElementById('number-form');
  const minInput = document.getElementById('min');
  const maxInput = document.getElementById('max');
  const generateBtn = document.getElementById('generate-btn');
  const resultValue = document.getElementById('result-value');
  const errorMsg = document.getElementById('error-msg');

  function generate() {
    const min = parseInt(minInput.value, 10);
    const max = parseInt(maxInput.value, 10);

    errorMsg.textContent = '';

    if (isNaN(min) || isNaN(max)) {
      errorMsg.textContent = 'Please enter valid numbers for both fields.';
      return;
    }
    if (min > max) {
      errorMsg.textContent = 'Min must be less than or equal to Max.';
      return;
    }

    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    resultValue.textContent = num.toLocaleString();
    resultValue.classList.remove('animate');
    void resultValue.offsetWidth; // reflow to restart animation
    resultValue.classList.add('animate');
  }

  generateBtn.addEventListener('click', generate);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    generate();
  });
})();
