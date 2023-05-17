const questions = [
  {
    question: 'What is the main goal of machine learning?',
    options: [
      { answer: 'Explicit programming', correct: false },
      { answer: 'Data analysis', correct: false },
      { answer: 'Learning from data', correct: true },
      { answer: 'Reincarnate as a machine, and attending a school', special: true }
    ]
  },
  {
    question: 'What is the process of adjusting weights and biases in a neural network called?',
    options: [
      { answer: 'Propagation', correct: false },
      { answer: 'Error correction', correct: false },
      { answer: 'Training', correct: false },
      { answer: 'Backpropagation', correct: true }
    ]
  },
  {
    question: 'What are some challenges that natural language understanding (NLU) faces in processing human language?',
    options: [
      { answer: 'Multiple interpretations of sentences', correct: false },
      { answer: 'Arrangement of words or phrases', correct: false },
      { answer: 'Misspelled words or grammatical mistakes', correct: false },
      { answer: 'All of the above', correct: true }
    ]
  },
  {
    question: 'Which type of neural network is effective in handling sequential data?',
    options: [
      { answer: 'Feedforward Neural Networks', correct: false },
      { answer: 'Recurrent Neural Networks (RNNs)', correct: true },
      { answer: 'Sequential Neural Networks', correct: false },
      { answer: 'Convolutional Neural Networks', correct: false }
    ]
  },
  {
    question: 'Which approach to text summarization involves selecting important sentences from the original text?',
    options: [
      { answer: 'Extractive summarization', correct: true },
      { answer: 'Abstractive summarization', correct: false },
      { answer: 'Linguistic summarization', correct: false },
      { answer: 'Recursive summarization', correct: false }
    ]
  },
  {
    question: 'What is Neural Style Transfer?',
    options: [
      { answer: 'Generating new data using GANs', correct: false },
      { answer: 'Applying the style of one image to another', correct: true },
      { answer: 'Transfering the artstic style of your own neuron to someone else', special: true },
      { answer: 'Creating personalized artwork using AI', correct: false }
    ]
  },
  {
    question: 'How does the generator in GANs create data',
    options: [
      { answer: 'By training on a labeled dataset', correct: false },
      { answer: 'By analyzing features and textures', correct: false },
      { answer: 'By gradually refining random noise', correct: true },
      { answer: 'By competing with the discriminator', correct: false }
    ]
  },
  {
    question: 'What is one way to differentiate between AI art and human art?',
    options: [
      { answer: 'Staring deep into the eye for its soul', special: true },
      { answer: 'Lack of intentionality in AI art', correct: true },
      { answer: 'Just google it', special: true },
      { answer: 'Lack of intentionality in Human art', correct: false }
    ]
  },
  {
    question: 'What is Music Information Retrieval (MIR)?',
    options: [
      { answer: 'A field that combines music and literature to develop techniques and algorithms for analyzing music using computational methods.', correct: false },
      { answer: 'A field that combines music and computer science to develop techniques and algorithms for analyzing music using computational methods.', correct: true },
      { answer: 'A field that combines music and biology to develop techniques and algorithms for analyzing music using computational methods.', correct: false },
      { answer: 'A field that combines music and my own tiredness from makeing this website where I no longer want to think of a actual false answer, so promise me do not pick this one', special: true }
    ]
  },
  {
    question: 'How does data harmonization contribute to AI-driven music applications?',
    options: [
      { answer: 'Ensures coherence and reliability of the combined dataset', correct: true },
      { answer: 'Trains AI algorithms using diverse music data', correct: false },
      { answer: 'Aligns music features with ethical guidelines', correct: false },
      { answer: 'Enhances the creativity of AI-generated art', correct: false }
    ]
  },
  {
    question: 'What ethical concerns have not been raised regarding AI-generated art?',
    options: [
      { answer: 'Lack of creativity involved in the artistic process', correct: false },
      { answer: 'Inconsistencies in naming conventions and labeling schemes', correct: true },
      { answer: 'Unconsented use of artists work in AI algorithms', correct: false },
      { answer: 'Devaluation of human artists creative contributions', correct: false }
    ]
  }

];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerOptionsElement = document.getElementById('answer-options');
const feedbackElement = document.getElementById('feedback');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
let currentQuestion = 0;
let score = 0;

function showQuestion(questionObj) {
  questionElement.innerText = questionObj.question;
  answerOptionsElement.innerHTML = '';
  questionObj.options.forEach(option => {
    const label = document.createElement('label');
    const optionInput = document.createElement('input');
    optionInput.type = 'radio';
    optionInput.name = 'answer';
    optionInput.value = option.answer;
    label.appendChild(optionInput);
    label.appendChild(document.createTextNode(option.answer));
    answerOptionsElement.appendChild(label);
  });
}

function getSelectedOption() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return null;
  }
  return selectedOption.value;
}

function showFeedback(feedback) {
  feedbackElement.innerText = feedback;
}

function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }
  showFeedback('');
  showQuestion(questions[currentQuestion]);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const selectedOption = getSelectedOption();
  if (!selectedOption) {
    showFeedback('Please select an answer.');
    return;
  }
  const currentQuestionObj = questions[currentQuestion];
  if (currentQuestionObj.options.find(o => o.special)!=null && selectedOption === currentQuestionObj.options.find(o => o.special).answer) {
    window.alert("Your progression tenderly gazes at you and talks no more :)");
    restartQuiz();
    return;
  } 
  else if(selectedOption === currentQuestionObj.options.find(o => o.correct).answer){
    score++;
    showFeedback('Correct!');
  } 
  else {
    showFeedback('Wrong answer. The correct answer was: ' + currentQuestionObj.options.find(o => o.correct).answer);
  }
  if (currentQuestion < questions.length - 1) {
    setTimeout(() => {
      showNextQuestion();
    }, 1000);
  } else {
    setTimeout(() => {
      endQuiz();
    }, 1000);
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion(questions[currentQuestion]);
  feedbackElement.innerText = '';
  
}

function endQuiz() {
  quizContainer.innerHTML = `
    <h1>Quiz Results</h1>
    <p>You answered ${score} out of ${questions.length} questions correctly.</p>
  `;
  restartButton.style.display = 'block';
  submitButton.style.display = 'none';
}

showQuestion(questions[currentQuestion]);
submitButton.addEventListener('click', handleFormSubmit);
restartButton.addEventListener('click', restartQuiz);
