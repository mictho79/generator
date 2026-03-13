(function () {
  const generateBtn = document.getElementById('generate-btn');
  const colorPreview = document.getElementById('color-preview');
  const hexValue = document.getElementById('hex-value');
  const rgbValue = document.getElementById('rgb-value');
  const hslValue = document.getElementById('hsl-value');
  const copyBtn = document.getElementById('copy-btn');

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }

  function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
    const [h, s, l] = rgbToHsl(r, g, b);

    colorPreview.style.backgroundColor = hex;
    hexValue.textContent = hex;
    rgbValue.textContent = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    hslValue.textContent = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

    // Adjust copy button color for readability
    copyBtn.style.backgroundColor = hex;
    copyBtn.style.color = l > 55 ? '#1e293b' : '#ffffff';
    copyBtn.style.borderColor = hex;
  }

  copyBtn.addEventListener('click', function () {
    const text = hexValue.textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = 'Copy Hex'; }, 1800);
      });
    } else {
      // Fallback
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      copyBtn.textContent = 'Copied!';
      setTimeout(function () { copyBtn.textContent = 'Copy Hex'; }, 1800);
    }
  });

  generateBtn.addEventListener('click', generateColor);
  generateColor(); // Generate on load
})();
