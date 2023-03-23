const gameUser = document.getElementById('game-user');
const gameScore = document.getElementById('game-score');
const gameScoreBtn = document.getElementById('score-btn');

const myGameUSerData = async () => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LoviMadaan1209aaradhya/scores',
      {
        method: 'POST',
        body: JSON.stringify({
          user: gameUser.value,
          score: gameScore.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )
      .then((response) => response.json());
  };

  gameScoreBtn.addEventListener('click', myGameUSerData)