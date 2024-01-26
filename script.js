//Create opening alert
// alert(`Are you ready to play?`);
// alert(`To play, read the hints and guess the animal`);

//Create data for game
// let animal = `elephant`;

// let hints = [
//   `This animal is a mammal`,
//   `This animal can grow taller than the avg human`,
//   `This animal lives in Africa and Asia`,
//   `This animal can weigh 6,000 -13,000 bls`,
//   `This animal is has tusks`,
//   `This animal is the largest land mammal`,
// ];

let animals = [
  {
    name: 'elephant',
    hints: [
      `This animal is a mammal`,
      `This animal can grow taller than the avg human`,
      `This animal lives in Africa and Asia`,
      `This animal can weigh 6,000 -13,000 bls`,
      `This animal is has tusks`,
      `This animal is the largest land mammal`,
    ],
  },
  {
    name: 'duck',
    hints: [
      `This animal can be found in ponds`,
      `This animal can fly`,
      `This animal has a beak`,
      `This animal quacks`,
      `This animal lays eggs`,
    ],
  },
  {
    name: 'cat',
    hints: [
      `This animal has 4 legs`,
      `This animal is smaller than a microwave`,
      `This animal loves tuna`,
      `This animal is cute`,
      `This animals meows`,
    ],
  },
];
let body = document.querySelector(`body`)
//create variable that saves randomAnimal
let randoAnimal = animals[Math.floor(Math.random() * animals.length)];

// //Create a variable for round left
let roundsLeft = randoAnimal.hints.length;

// // Create loop for each hint
for (let hint of randoAnimal.hints) {
  roundsLeft--;

  let guess = window.prompt(`Hint: ${hint}`);
  guess = guess.toLowerCase();
  if (guess === randoAnimal.name) {
    //Win state
    alert(
      `Congratulations you have guessed correctly! The answer was ${randoAnimal.name}`
    );
    break;
  } else {
    //Continune/lose state
    // alert(`You have ${roundsLeft} guesses left`);
    let update = document.createElement(`p`)
    update.textContent = `You have ${roundsLeft} guesses left`
    body.appendChild(update)
    if (roundsLeft === 0) alert(`Sorry but you lost pal :(`);
  }
}
