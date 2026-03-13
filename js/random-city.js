(function () {
  const cities = [
    'Amsterdam', 'Athens', 'Bangkok', 'Barcelona', 'Beijing',
    'Berlin', 'Buenos Aires', 'Cairo', 'Cape Town', 'Chicago',
    'Copenhagen', 'Dubai', 'Dublin', 'Florence', 'Helsinki',
    'Hong Kong', 'Istanbul', 'Jakarta', 'Johannesburg', 'Kyoto',
    'Lagos', 'Lima', 'Lisbon', 'London', 'Los Angeles',
    'Madrid', 'Mexico City', 'Miami', 'Milan', 'Montreal',
    'Moscow', 'Mumbai', 'Nairobi', 'New York', 'Oslo',
    'Paris', 'Prague', 'Rio de Janeiro', 'Rome', 'San Francisco',
    'São Paulo', 'Seoul', 'Shanghai', 'Singapore', 'Stockholm',
    'Sydney', 'Taipei', 'Tokyo', 'Toronto', 'Vancouver',
    'Vienna', 'Warsaw', 'Washington D.C.', 'Zürich', 'Budapest',
    'Casablanca', 'Bogotá', 'Karachi', 'Manila', 'Kuala Lumpur'
  ];

  const generateBtn = document.getElementById('generate-btn');
  const resultValue = document.getElementById('result-value');
  const resultCount = document.getElementById('result-count');

  generateBtn.addEventListener('click', function () {
    const idx = Math.floor(Math.random() * cities.length);
    resultValue.textContent = cities[idx];
    resultValue.classList.remove('animate');
    void resultValue.offsetWidth;
    resultValue.classList.add('animate');
    if (resultCount) resultCount.textContent = 'Picked from ' + cities.length + ' cities';
  });
})();
