// QUESTIONS

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
      "question": "Give me the guy with top-tier athleticism even if he lacks polish.",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    },
    {
      "question": "Low basketball IQ is a deal-breaker for me.",
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
      "question": "High motor is not as important as other skills.",
      "answer1": "Agree",
      "answer1Total": 0,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 2
    },
    {
      "question": "I would rather take a boom-or-bust potential star over a future solid 10 year pro.",
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
      "answer1Total": -2.5,
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
      "question": "I'd rather have a guy with significant holes in his game who can drop 25 points than a jack of all trades, master of none",
      "answer1": "Agree",
      "answer1Total": 2,
      "answer2": "Neutral",
      "answer2Total": 1,
      "answer3": "Disagree",
      "answer3Total": 0
    }

  ]

  const players = [
    {name: "LaMelo Ball", rank: 1.5, video: "https://www.youtube.com/watch?v=5d3MNxZ07Ic"},
    {name: "James Wiseman", rank: 1.5, video: "https://www.youtube.com/watch?v=K2XHtqbsVqQ"},
    {name: "Obi Toppin", rank: 0.5, video: "https://www.youtube.com/watch?v=-mlZhl86Ulk"},
    {name: "Killian Hayes", rank: 0.5, video: "https://www.youtube.com/watch?v=y8nq-wAZGkg"},
    {name: "Deni Avdija", rank: 0, video: "https://www.youtube.com/watch?v=bmKrg1zWVys"},
    {name: "Anthony Edwards", rank: 1.5, video: "https://www.youtube.com/watch?v=l46pqSeeA34"},
    {name: "Tyrese Haliburton", rank: -1.0, video: "https://www.youtube.com/watch?v=U3qOd8PQvxQ"},
    {name: "Isaac Okoro", rank: -1.0, video: "https://www.youtube.com/watch?v=iATlCqxmRi0"},
    {name: "Devin Vassell", rank: -0.5, video: "https://www.youtube.com/watch?v=O6ZtJw1k3bk"},
    {name: "Onyeka Okongwu", rank: -1.0, video: "https://www.youtube.com/watch?v=nulhicMWpvo"}
 
    // 
  ]

  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
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
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
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
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      // const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      // function getOutputs() {
        players[0].rank = 1.0 +
        0.3*score[0] + 1.0*score[1] + 0.6*score[2] + 1.2*score[3] + 0.5*score[4] + 0.6*score[5] + 1.5*score[6] + 0*score[7] + .6*score[8] + .6*score[9];
        players[1].rank = 1.5 +
        0.2*score[0] + 0.8*score[1] + 0.8*score[2] + 0.4*score[3] + 0.4*score[4] + 0.5*score[5] + 1.2*score[6] + 1*score[7] + .2*score[8] + .8*score[9];
        players[2].rank = 1.0 +
        0.1*score[0] + 0.1*score[1] + 0.8*score[2] + 0.5*score[3] + 0.7*score[4] + 0.7*score[5] + 1.0*score[6] + 1*score[7] + .2*score[8] + 1.2*score[9];
        players[3].rank = 0.5 +
        0.8*score[0] + 0.8*score[1] + 1.0*score[2] + 0.8*score[3] + 0.5*score[4] + 0.5*score[5] + 0.5*score[6] + 0*score[7] + .8*score[8] + .5*score[9];
        players[4].rank = 1.0 +
        0.6*score[0] + 0.9*score[1] + 0.4*score[2] + 0.9*score[3] + 0.3*score[4] + 0.9*score[5] + 0.3*score[6] + 0*score[7] + .3*score[8] + .5*score[9];
        players[5].rank = 1.0 +
        0.3*score[0] + 1.0*score[1] + 1.2*score[2] + 0.2*score[3] + 0.2*score[4] + 0.3*score[5] + 1.2*score[6] + 0*score[7] + .4*score[8] + 1.3*score[9];
        players[6].rank = -0.5 +
        0.6*score[0] + 0.6*score[1] + 0.4*score[2] + 1.5*score[3] + 0.8*score[4] + 0.9*score[5] + 0.2*score[6] + 0*score[7] + .6*score[8] + .2*score[9];
        players[7].rank = -0.25 +
        0.69*score[0] + 0.8*score[1] + 0.9*score[2] + 0.8*score[3] + 0.2*score[4] + 0.9*score[5] + 0.6*score[6] + 0*score[7] + .9*score[8] + .3*score[9];
        players[8].rank = -0.5 +
        1.2*score[0] + 0.8*score[1] + 0.8*score[2] + 0.9*score[3] + 0.8*score[4] + 0.8*score[5] + 0.1*score[6] + 0*score[7] + .8*score[8] + .1*score[9];    
        players[9].rank = 0.25 +
        0.7*score[0] + 0.7*score[1] + 0.9*score[2] + 0.7*score[3] + 0.2*score[4] + 0.9*score[5] + 0.5*score[6] + 0.5*score[7] + 1.0*score[8] + .2*score[9];    
  
        players.sort(compare);
        players.map(a => a.name);
   

      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.style.display = "inherit";
          result.innerHTML =

           `<h1 class="final-score">Your big board:</h1> 
           <div>1: <a href="${players[9].video}" target="_blank">${players[9].name}</a></div>
           <div>2: <a href="${players[8].video}" target="_blank">${players[8].name}</a></div>
           <div>3: <a href="${players[7].video}" target="_blank">${players[7].name}</a></div>
           <div>4: <a href="${players[6].video}" target="_blank">${players[6].name}</a></div>
           <div>5: <a href="${players[5].video}" target="_blank">${players[5].name}</a></div>
           <div>6: <a href="${players[4].video}" target="_blank">${players[4].name}</a></div>
           <div>7: <a href="${players[3].video}" target="_blank">${players[3].name}</a></div>
           <div>8: <a href="${players[2].video}" target="_blank">${players[2].name}</a></div>
           <div>9: <a href="${players[1].video}" target="_blank">${players[1].name}</a></div>
           <div>10: <a href="${players[0].video}" target="_blank">${players[0].name}</a></div>
           <div class="results-footer">Click on a player's name to redirect to a youtube scouting video</div>
           <div class="results-footer"><a href="https://www.sbnation.com/nba/2020/8/20/21374098/nba-mock-draft-2020-lottery-order-timberwolves-warriors-bulls" target="blank">Click here for Ricky O'Donnell's latest mock draft, with descriptions for all 10 players</a></div>
           
           
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
    }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);