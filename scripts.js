const questions = [
    {
      "question": "I'm not worried if a prospect is a poor defender right now. They can learn to be good once they get to the NBA.",
      "answer1": "Agree",
      "answer1Total": 0,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 2
    },
    {
      "question": "I don't mind taking an older prospect as long as the production is there.",
      "answer1": "Agree",
      "answer1Total": 0,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 2
    },
    {
      "question": "Give me the guy with top-tier athleticism even if he hasn't found out the best way to use it yet.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    },
    {
      "question": "Low feel is a deal-breaker for me.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    },
    {
      "question": "I don't buy shooting potential. I want a guy who has already shown he can shoot it right now.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    },
    {
      "question": "I'd rather have a hard worker that will max out his potential over a better talent who has serious focus issues.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    },
    {
      "question": "I would rather have a boom-or-bust prospect over someone with a high floor but low ceiling.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    },
    {
      "question": "I'm not wasting a good lottery pick on a big man.",
      "answer1": "Agree",
      "answer1Total": -2,
      "answer2": "Neutral",
      "answer2Total": 0,
      "answer3": "Disagree",
      "answer3Total": 1
    },
    {
      "question": "I don't mind if a guy can only play one position.",
      "answer1": "Agree",
      "answer1Total": 0,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 2
    },
    {
      "question": "I'd rather have a guy with significant holes in his game who can drop 23 points than a jack of all trades, master of none.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    }

  ]

const players = [
  {name: "LaMelo Ball", 
    rank: 1, 
    video: "https://youtu.be/4Cp5uLpn2mk",
    position: "Guard"
  },
  {name: "James Wiseman", 
    rank: 2, 
    video: "https://youtu.be/KR6QP_U2x-U", 
    position: "Big"
  },
  {name: "Obi Toppin", 
    rank: 3, 
    video: "https://youtu.be/R7uLXOSQSCQ", 
    position: "Big"
  },
  {name: "Killian Hayes", 
    rank: 4, 
    video: "https://youtu.be/6jZEKNHCYAo", 
    position: "Guard"
  },
  {name: "Deni Avdija", 
    rank: 5, 
    video: "https://www.youtube.com/watch?v=bmKrg1zWVys", 
    position: "Forward"
  },
  {name: "Anthony Edwards", 
    rank: 6, 
    video: "https://youtu.be/k3iayLEQcTw", 
    position: "Guard"
  },
  {name: "Tyrese Haliburton", 
    rank: 7, 
    video: "https://youtu.be/dl02-RSIjCA", 
    position: "Guard"
  },
  {name: "Isaac Okoro", 
    rank: 8, 
    video: "https://youtu.be/jiH8FTOsKyo", 
    position: "Wing"
  },
  {name: "Devin Vassell", 
    rank: 9, 
    video: "https://youtu.be/pHjfKLZQbu8", 
    position: "Wing"
  },
  {name: "Onyeka Okongwu", 
    rank: 10, 
    video: "https://youtu.be/Ty4C325wiC4", 
    position: "Big"
  },
  {name: "Aleksej Pokusevski", 
    rank: 11, 
    video: "https://www.youtube.com/watch?v=kXFjuG5BJvA", 
    position: "Forward"
  },
  {name: "Patrick Williams",
    rank: 12,
    video: "https://youtu.be/oLD_XajiKa4",
    position: "Forward"
  },
  {name: "Kira Lewis",
    rank: 14,
    video: "https://youtu.be/6E6s1ljQoeI",
    position: "Guard"
  },
  {name: "Tyrese Maxey",
    rank: 15,
    video: "https://youtu.be/ccH7d-OsOEw",
    position: "Guard"
  },
  {name: "Cole Anthony",
    rank: 16,
    video: "https://youtu.be/3TsjO10E0qA",
    position: "Guard"
  },
  {name: "RJ Hampton",
    rank: 17,
    video: "https://youtu.be/WQJlgIajbSc",
    position: "Guard"
  },
]

  
let currentQuestion = 0;
let score = [];
const totalQuestions =questions.length;
  
const container = document.querySelector('.quiz-container');
const jumbotron = document.querySelector('.jumbotron');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');
  
//Function to generate question 
function generateQuestions (index) {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    questionEl.innerHTML = `<li value=${index + 1}> ${question.question}</li>`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}

//function to sort array of players by score once final scores are tallied
function compare(a, b) {
  const playerA = a.rank
  const playerB = b.rank

  let comparison = 0;
  if (playerA > playerB) {
    comparison = 1;
  } else if (playerA < playerB) {
    comparison = -1;
  }
  return comparison;
}
  
 
  
function loadNextQuestion () {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if input selected
  if(!selectedOption) {
      alert('Please select your answer!');
      return;
  }
  //Get value of selected radio
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  ////Add the answer score to the score array
  score.push(answerScore);
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if(currentQuestion == totalQuestions - 1) {
      nextButton.textContent = 'Finish';
  }
  //tabulate rank for every player based on answers
  //Ball
  players[0].rank = 1.0 +
  0.3*score[0] + 1.0*score[1] + 0.6*score[2] + 1.2*score[3] + 0.5*score[4] + 0.6*score[5] + 1.5*score[6] + 0*score[7] + .6*score[8] + .6*score[9];
  
  //Wiseman
  players[1].rank = 1.5 +
  0.3*score[0] + 0.8*score[1] + 0.9*score[2] + 0.4*score[3] + 0.4*score[4] + 0.5*score[5] + 1.2*score[6] + 1*score[7] + .3*score[8] + .9*score[9];
  
  //Toppin
  players[2].rank = 1.25 +
  0.1*score[0] + 0.1*score[1] + 0.8*score[2] + 0.5*score[3] + 0.7*score[4] + 0.7*score[5] + 1.0*score[6] + 1*score[7] + .2*score[8] + 1.2*score[9];
  
  //Hayes
  players[3].rank = 0.5 +
  0.8*score[0] + 1.0*score[1] + 0.5*score[2] + 0.8*score[3] + 0.4*score[4] + 0.5*score[5] + 0.5*score[6] + 0*score[7] + .8*score[8] + .5*score[9];
  
  //Avdija
  players[4].rank = 1.0 +
  0.6*score[0] + 0.8*score[1] + 0.4*score[2] + 0.9*score[3] + 0.3*score[4] + 0.9*score[5] + 0.3*score[6] + 0*score[7] + .3*score[8] + .5*score[9];
  
  //Edwards
  players[5].rank = 1.5 +
  0.3*score[0] + 1.0*score[1] + 1.4*score[2] + 0.2*score[3] + 0.2*score[4] + 0.3*score[5] + 1.2*score[6] + 0*score[7] + .4*score[8] + 1.3*score[9];
  
  //Haliburton
  players[6].rank = -0.5 +
  0.6*score[0] + 0.6*score[1] + 0.4*score[2] + 1.5*score[3] + 0.8*score[4] + 0.9*score[5] + 0.2*score[6] + 0*score[7] + .6*score[8] + .2*score[9];
  
  //Okoro
  players[7].rank = -0.25 +
  0.69*score[0] + 0.8*score[1] + 0.9*score[2] + 0.8*score[3] + 0.2*score[4] + 0.9*score[5] + 0.6*score[6] + 0*score[7] + .9*score[8] + .2*score[9];
  
  //Vassell 
  players[8].rank = -0.5 +
  1.2*score[0] + 0.7*score[1] + 0.8*score[2] + 0.9*score[3] + 0.8*score[4] + 0.8*score[5] + 0.1*score[6] + 0*score[7] + .8*score[8] + .1*score[9];    
  
  //Okongwu
  players[9].rank = 0.5 +
  0.7*score[0] + 0.8*score[1] + 0.9*score[2] + 0.7*score[3] + 0.2*score[4] + 0.9*score[5] + 0.6*score[6] + 0.5*score[7] + 1.0*score[8] + .2*score[9];   
  
  //Pokusevski
  players[10].rank = -1.75 +
  0.4*score[0] + 1.0*score[1] + 0.5*score[2] + 1.0*score[3] + 0.3*score[4] + 0.5*score[5] + 1.5*score[6] + 0.5*score[7] + 0.6*score[8] + .3*score[9]; 
  
  //Williams
  players[11].rank = -0.5 +
  0.7*score[0] + 1.0*score[1] + 0.5*score[2] + 0.7*score[3] + 0.3*score[4] + 0.8*score[5] + 0.3*score[6] + 0.25*score[7] + 0.6*score[8] + .2*score[9];

  //Lewis
  players[12].rank = -0.5 +
  0.6*score[0] + 0.8*score[1] + 0.7*score[2] + 0.6*score[3] + 0.6*score[4] + 0.6*score[5] + 0.5*score[6] + 0*score[7] + 0.2*score[8] + .6*score[9];

  //Maxey
  players[13].rank = -0.75 +
  0.9*score[0] + 0.8*score[1] + 0.5*score[2] + 0.5*score[3] + 0.2*score[4] + 0.7*score[5] + 0.4*score[6] + 0*score[7] + 0.2*score[8] + .5*score[9];
  
  //Anthony
  players[14].rank = -0.5 +
  0.7*score[0] + 0.7*score[1] + 0.6*score[2] + 0.3*score[3] + 0.6*score[4] + 0.9*score[5] + 0.7*score[6] + 0*score[7] + 0.3*score[8] + .7*score[9];
  
   //Hampton
   players[15].rank = -0.75 +
   0.5*score[0] + 0.8*score[1] + 0.9*score[2] + 0.3*score[3] + 0.2*score[4] + 0.6*score[5] + 0.5*score[6] + 0*score[7] + 0.5*score[8] + .3*score[9];
  
  //sort array of players by rank, spit out the ordered names in an array
  players.sort(compare);
  players.map(a => a.name);

  //populate HTML in results container
  if(currentQuestion == totalQuestions) {
      container.style.display = 'none';
      jumbotron.style.display = 'none';
      result.style.display = "inherit";
      result.innerHTML =

        `<h1 class="final-score">YOUR BIG BOARD</h1> 
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col" class="pos">Position</th>
            <th scope="col">Scouting Video</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${players[15].name}</td>
            <td class="pos">${players[15].position}</td>
            <td><a href="${players[15].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${players[14].name}</td>
            <td class="pos">${players[14].position}</td>
            <td><a href="${players[14].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${players[13].name}</td>
            <td class="pos">${players[13].position}</td>
            <td><a href="${players[13].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>${players[12].name}</td>
            <td class="pos">${players[12].position}</td>
            <td><a href="${players[12].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>${players[11].name}</td>
            <td class="pos">${players[11].position}</td>
            <td><a href="${players[11].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>${players[10].name}</td>
            <td class="pos">${players[10].position}</td>
            <td><a href="${players[10].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>${players[9].name}</td>
            <td class="pos">${players[9].position}</td>
            <td><a href="${players[9].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>${players[8].name}</td>
            <td class="pos">${players[8].position}</td>
            <td><a href="${players[8].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>${players[7].name}</td>
            <td class="pos">${players[7].position}</td>
            <td><a href="${players[7].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>${players[6].name}</td>
            <td class="pos">${players[6].position}</td>
            <td><a href="${players[6].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>${players[5].name}</td>
            <td class="pos">${players[5].position}</td>
            <td><a href="${players[5].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>${players[4].name}</td>
            <td class="pos">${players[4].position}</td>
            <td><a href="${players[4].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>${players[3].name}</td>
            <td class="pos">${players[3].position}</td>
            <td><a href="${players[3].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td>${players[2].name}</td>
            <td class="pos">${players[2].position}</td>
            <td><a href="${players[2].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td>${players[1].name}</td>
            <td class="pos">${players[1].position}</td>
            <td><a href="${players[1].video}" target="_blank">Watch</a></td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td>${players[0].name}</td>
            <td class="pos">${players[0].position}</td>
            <td><a href="${players[0].video}" target="_blank">Watch</a></td>
          </tr>
        </tbody>
      </table>
      <div class="results-footer"><a href="https://www.sbnation.com/nba/2020/8/20/21374098/nba-mock-draft-2020-lottery-order-timberwolves-warriors-bulls" target="blank">Check your results against SB Nation's Ricky O'Donnell</a></div>
      <button type="button" class="btn btn-primary btn-lg" id="restart-button" onclick="restartQuiz()">Restart Quiz</button>
        `;
      return;
  }
  generateQuestions(currentQuestion);
}
  
//load previous question
function loadPreviousQuestion() {
  currentQuestion--;
  score.pop();
  generateQuestions(currentQuestion);
}
  
//reset and restart the quiz;
function restartQuiz() {
    currentQuestion = 0;
    score = [];
    location.reload();
}
  
  
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);