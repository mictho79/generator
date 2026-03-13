(function () {
  const firstNames = [
    'Alice', 'Amelia', 'Ana', 'Aiko', 'Amara',
    'Benjamin', 'Bruno', 'Charlotte', 'Chen', 'Clara',
    'Daniel', 'David', 'Diana', 'Elena', 'Elijah',
    'Emma', 'Ethan', 'Eva', 'Felix', 'Fatima',
    'Gabriel', 'Grace', 'Hannah', 'Henry', 'Hugo',
    'Isabella', 'Ivan', 'Jack', 'James', 'Jasmine',
    'Julia', 'Julian', 'Kevin', 'Laura', 'Leo',
    'Liam', 'Lily', 'Lucas', 'Luna', 'Maria',
    'Mateo', 'Maya', 'Michael', 'Mia', 'Nathan',
    'Noah', 'Nora', 'Oliver', 'Olivia', 'Omar',
    'Pablo', 'Priya', 'Rachel', 'Rafael', 'Ryan',
    'Samantha', 'Samuel', 'Sara', 'Sebastian', 'Sofia',
    'Sophie', 'Thomas', 'Victoria', 'Wei', 'William',
    'Yasmine', 'Yuki', 'Zara', 'Zoe', 'Lena',
    'Max', 'Nina', 'Oscar', 'Petra', 'Quinn'
  ];

  const generateBtn = document.getElementById('generate-btn');
  const resultValue = document.getElementById('result-value');
  const resultCount = document.getElementById('result-count');

  generateBtn.addEventListener('click', function () {
    const idx = Math.floor(Math.random() * firstNames.length);
    resultValue.textContent = firstNames[idx];
    resultValue.classList.remove('animate');
    void resultValue.offsetWidth;
    resultValue.classList.add('animate');
    if (resultCount) resultCount.textContent = 'Picked from ' + firstNames.length + ' names';
  });
})();
