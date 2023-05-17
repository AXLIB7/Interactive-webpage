let score = 0;
const gameImage = document.getElementById("game-image");
const scoreElement = document.getElementById("score");
imageFileNames = ["image1_correct", "image2", "image3_correct","image4_correct","image5_correct","image6_correct",
  "image7_correct","image8_correct","image9","image10","image11","image12"];


function checkAnswer(answer) {
  const correctAnswer = gameImage.src.includes("correct");
  if (answer == correctAnswer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }
  else{
    window.alert("This is the wrong answer.");
  }
  const currentIndex = imageFileNames.findIndex((name) => gameImage.src.includes(name));
  if (currentIndex !== -1) {
    imageFileNames.splice(currentIndex, 1);
  }
   if (imageFileNames.length > 0) {
    loadRandomImage();
  } else {
    resetGame();
  }
}

function loadRandomImage() {

  const randomIndex = Math.floor(Math.random() * imageFileNames.length);

  const imageUrl = `images/${imageFileNames[randomIndex]}.jpg`;

  gameImage.src = imageUrl;
}

function resetGame() {
  window.alert(`You answered ${score} out of 12 questions correctly. The game has reseted`);

  score = 0;
  scoreElement.textContent = "Score: 0";
  
  imageFileNames = ["image1_correct", "image2", "image3_correct","image4_correct","image5_correct","image6_correct",
  "image7_correct","image8_correct","image9","image10","image11","image12"];

  loadRandomImage();
}

loadRandomImage()