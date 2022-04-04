// Assigning random numbers between 2-11 to the two cards 
let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;

// Sum of the two cards
let sum = firstCard + secondCard

// Game mechanics
if (sum<=20){
  console.log("Do you want to draw a new card?")
}
else if (sum === 21){
  console.log("You've got BlackJack!")
} else {
  console.log("You're out of the game:(")
}


// CHECKING THE AGE
let age = prompt("Please enter your age")

if (age<18){
  alert("You're not old enough to play this game")
} else{
  alert("Welcome!")
}