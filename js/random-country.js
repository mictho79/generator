(function () {
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia',
    'Austria', 'Belgium', 'Bolivia', 'Brazil', 'Canada',
    'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Ecuador', 'Egypt', 'Finland', 'France',
    'Germany', 'Ghana', 'Greece', 'Hungary', 'India',
    'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan',
    'Jordan', 'Kenya', 'Malaysia', 'Mexico', 'Morocco',
    'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Pakistan',
    'Peru', 'Philippines', 'Poland', 'Portugal', 'Romania',
    'Russia', 'Saudi Arabia', 'Senegal', 'Singapore', 'South Africa',
    'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Thailand',
    'Tunisia', 'Turkey', 'Ukraine', 'United Kingdom', 'United States',
    'Uruguay', 'Venezuela', 'Vietnam', 'Zimbabwe'
  ];

  const generateBtn = document.getElementById('generate-btn');
  const resultValue = document.getElementById('result-value');
  const resultCount = document.getElementById('result-count');

  let generated = 0;

  generateBtn.addEventListener('click', function () {
    const idx = Math.floor(Math.random() * countries.length);
    resultValue.textContent = countries[idx];
    resultValue.classList.remove('animate');
    void resultValue.offsetWidth;
    resultValue.classList.add('animate');
    generated++;
    if (resultCount) resultCount.textContent = 'Picked from ' + countries.length + ' countries';
  });
})();
