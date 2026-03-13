(function () {
  const namesInput = document.getElementById('names-input');
  const teamCountInput = document.getElementById('team-count');
  const generateBtn = document.getElementById('generate-btn');
  const teamsResult = document.getElementById('teams-result');
  const errorMsg = document.getElementById('error-msg');

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  generateBtn.addEventListener('click', function () {
    errorMsg.textContent = '';
    teamsResult.innerHTML = '';

    const names = namesInput.value
      .split('\n')
      .map(function (n) { return n.trim(); })
      .filter(function (n) { return n.length > 0; });

    const teamCount = parseInt(teamCountInput.value, 10);

    if (names.length < 2) {
      errorMsg.textContent = 'Please enter at least 2 names (one per line).';
      return;
    }
    if (isNaN(teamCount) || teamCount < 2) {
      errorMsg.textContent = 'Number of teams must be at least 2.';
      return;
    }
    if (teamCount > names.length) {
      errorMsg.textContent = 'Number of teams cannot exceed the number of names (' + names.length + ').';
      return;
    }

    const shuffled = shuffle(names);
    const teams = [];
    for (let i = 0; i < teamCount; i++) teams.push([]);
    shuffled.forEach(function (name, i) {
      teams[i % teamCount].push(name);
    });

    const grid = document.createElement('div');
    grid.className = 'teams-grid';

    teams.forEach(function (team, i) {
      const card = document.createElement('div');
      card.className = 'team-card';
      const heading = document.createElement('h3');
      heading.textContent = 'Team ' + (i + 1);
      const ul = document.createElement('ul');
      team.forEach(function (member) {
        const li = document.createElement('li');
        li.textContent = member;
        ul.appendChild(li);
      });
      card.appendChild(heading);
      card.appendChild(ul);
      grid.appendChild(card);
    });

    teamsResult.appendChild(grid);
  });
})();
