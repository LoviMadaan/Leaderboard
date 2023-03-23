const gameScoreAdded = document.getElementById('score-added');
const scoreRefresh = document.getElementById('ref-btn');

scoreRefresh.addEventListener('click', () => {
    window.location.href = '';
  });

  const displayData = async () => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LoviMadaan1209aaradhya/scores',
    )
      .then((response) => response.json())
      .then((data) => {
        const gameData = data.result;
        gameData.forEach((x) => {
          const li = document.createElement('li');
          li.className = 'game-record';
          li.innerHTML = `${x.user} : ${x.score}`;
          gameScoreAdded.appendChild(li);
        });
      });
    const gameScoreItems = document.querySelectorAll('.game-record');
    for (let i = 1; i < gameScoreItems.length; i += 2) {
      gameScoreItems[i].style.backgroundColor = '#dddddd';
    }
  };
  
  displayData();