const introScreenHTML = `<div class="introScreen">
<div class="navbar">
          <ul>
                    <li>TriviaQuiz</li>
                    <li class='right'><span><a href='https://anishchand.com'>By Anish Chand</a></span></li>
          </ul>
</div>                            
<div class="filters">
          <div><label for="category">Category Type:&nbsp;</label>
          <select id = 'category-type'>
                    <option value=''>Random</option>
                    <option value='General Knowledge'>General Knowledge</option>
                    <option value='Film'>Film</option>
                    <option value='Music'>Music</option>
                    <option value='Science & Nature'>Science & Nature</option>
                    <option value='Sports'>Sports</option>
                    <option value='Geography'>Geography</option>
                    <option value='History'>History</option>
                    <option value='Celebrities'>Celebrities</option>
                    <option value='Animals'>Animals</option>
          </select>
          &nbsp;&nbsp;&nbsp;
          </div>
          <div>
          <label for="difficulty">Difficulty:&nbsp;</label>
          <select id = 'difficulty-type'>
                    <option value=''>Random</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
          </select>
          &nbsp;&nbsp;&nbsp;
          </div>
          <div>
          <label for="question-count">Question Count:&nbsp;</label>
          <input type="number" min='1' max= '15' value='1'  id = 'question-count' placeholder="  number of question">
          &nbsp;&nbsp;&nbsp;
          </div>
          <div><button class = 'start' onclick="startQuiz()">Begin</button></div>
</div>
<div class="description">
          <p>
                    This is a triva application. This application makes use of the opensource trivia api called 'OpenTrivia'. For more details, check
                    out &nbsp;<a href ='https://opentdb.com/'>OpenTrivia</a>.
          </p>
          <br>
          <p>
                    You can select different categories from the above dropdown menu. There are three levels of difficulty: easy, medium and hard.
                    The easy questions are scored 5 points, the medium are 10 points and the hard questions are worth 15 points.
          </p>
          <br>
          <p>
                    There may be some problems in finding all unique questions to a very specific criteria and may cause repitions due to low
                    volume of questions. For example: 50 questions of Celebrities in easy setting may return duplicate questions.
          </p>
</div>
</div>
`;

const mainScreenHTML = `<div class = 'mainScreen'>
<div class="navbar">
          <ul>
                    <li>TriviaQuiz</li>
                    <li class='right'>Current Score: <span id = 'currentScore'> 0</span></li>
          </ul>
</div>
<div class="question">
          <div class="points">Point:&nbsp<span id = 'pointValue'> 0</span></div>
          <div class="questionText"></div>
          <div class="options">
                    <button class="optionA" id ='opt' onclick="checkAnswer(this)"> Option A</button>
                    <button class="optionB" id ='opt' onclick="checkAnswer(this)">Option B</button>
                    <button class="optionC" id ='opt' onclick="checkAnswer(this)">Option C</button>
                    <button class="optionD" id ='opt' onclick="checkAnswer(this)">Option D</button>
          </div>
          <div class="result"></div>
          <button class = 'next' onclick="nextQuestion()"> Next Question </button>
</div>
</div>`;

const resultsScreenHTML = `<div class="endScreen">
<div class="navbar">
          <ul>
                    <li>TriviaQuiz</li>
                    <li class='right'>&copy; Anish Chand</span></li>
          </ul>
</div>                            
<div class="end">
          <div class="totalQuestionsAsked"></div>         
          <div class="totalPointsReceived"></div>
          <div class="totalCorrectAnswers"></div>
          <div class="highScore"></div>
</div>
</div>`;

const domElements = `
let categoryTypeElement = document.getElementById('category-type');
let difficultyLevelElement = document.getElementById('difficulty-type');
let questionCountElement = document.getElementById('question-count');
let questionText = document.querySelector('.questionText');
let optionAText = document.querySelector('.optionA');
let optionBText = document.querySelector('.optionB');
let optionCText = document.querySelector('.optionC');
let optionDText = document.querySelector('.optionD');
let currentScoreElement = document.getElementById('currentScore'); 
let pointValueElement = document.getElementById('pointValue');
let resultElement = document.querySelector('.result');
`;
const fetchJS = `
fetchQuestion = () => {
          fetch(request)
          .then(res => res.json())
          .then(data => (buildQuestion(data.results[0])))
}`;
const categories = `
const categories = {
          '' : '',
          'General Knowledge' : '9',
          'Film' : '11',
          'Music' : '12',
          'Science & Nature' : '17',
          'Sports' : '21',
          'Geography' : '22',
          'History' : '23',
          'Celebrities' : '26',
          'Animals' : '27',
}`;

const startQuiz = `startQuiz = () => {
          let mainScreen = document.querySelector('.mainScreen');
          let introScreen = document.querySelector('.introScreen');
          categoryType = categories[categoryTypeElement.value];
          difficultyLevel = difficultyLevelElement.value;
          questionCount = questionCountElement.value;
          totalQeus = questionCount;
          introScreen.style.display = 'none';
          mainScreen.style.display = 'block';
          fetchQuestion();
}`;

const shuffle = `shuffleOptions = (correctAnswer, incorrectAnswers) => {
          options = [decodeHTML(correctAnswer), decodeHTML(incorrectAnswers[0]), decodeHTML(incorrectAnswers[1]), decodeHTML(incorrectAnswers[2])];
          answers = shuffle(options);
          return answers;
}
shuffle = (array) => {
          let currIndex = array.length;
          let tempValue;
          while(currIndex !== 0){
                    const randIndex = Math.floor(Math.random() * currIndex);
                    currIndex--;
                    tempValue = array[currIndex];
                    array[currIndex] = array[randIndex];
                    array[randIndex] = tempValue;
          }          
          return array;
}`;

const check = `disableButtons = (bool) => {
          optionAText.disabled =bool;
          optionBText.disabled =bool;
          optionCText.disabled =bool;
          optionDText.disabled =bool;
}

checkAnswer = (choice) => {
          let optionNumber = choice.className;    
          let optionElement = document.querySelector("."+optionNumber);
          let userChoice = extractAnswer(optionElement.textContent);
          disableButtons(true);
          if(userChoice === answer){
                    resultElement.textContent = 'It is the CORRECT answer!!!';
                    scorePoints('correct');
          } else{
                    resultElement.textContent = 'WRONG!!!. The right answer was' + answer;
                    scorePoints('incorrect');
          }
}`;

const score = `scorePoints = (outcome) => {
          if(outcome === 'correct'){
                    totalCorrect++;
                    totalScore = parseInt(currentScoreElement.textContent) + parseInt(pointValueElement.textContent);
                    currentScoreElement.textContent = totalScore;
          }
}

nextQuestion = () => {
          if(questionCount > 1) {
                    questionCount--;
                    disableButtons(false);
                    resultElement.textContent = '';
                    fetchQuestion();         
          }else {
                    printResults();
          }
}`;

const results = `printResults = () =>{
          let mainScreen = document.querySelector('.mainScreen');
          let endScreen = document.querySelector('.endScreen');
          let totalPointsReceived = document.querySelector('.totalPointsReceived');
          let totalCorrectAnswers = document.querySelector('.totalCorrectAnswers');
          let totalQuestionsAsked = document.querySelector('.totalQuestionsAsked');
          mainScreen.style.display = 'none';
          endScreen.style.display = 'block';
          totalQuestionsAsked.textContent = 'Total Questions Asked: ' + totalQeus;
          totalCorrectAnswers.textContent = 'Total Correct Answers: ' + totalCorrect;
          totalPointsReceived.textContent = 'Total Points Scored: ' + totalScore;
          retrieveHighScore(totalScore);
}
retrieveHighScore = (totalScore) => {
          console.log(window.localStorage.getItem('highScore'))
          let highScore = document.querySelector('.highScore');
          if(window.localStorage.getItem('highScore') != null && window.localStorage.getItem('highScore') < totalScore){
                    window.localStorage.setItem('highScore', ''+totalScore);
                    highScore.textContent = totalScore; 
          }
          console.log(window.localStorage.getItem('highScore'))
          highScore.textContent = 'Highest Score:  ' + window.localStorage.getItem('highScore');

}`;