// Setting variables
let hasBlackJack = false
let isAlive = false
let message =""
let sum = 0
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Generate a random card
function getRandomCard(){
  let num = Math.floor(Math.random() * 13) + 1
  if(num === 1){
    return  11
  } else if (num>10){
    return  10
  } else {
    return num
  }
} 

// Modify the message line
function messageLine(){
  messageEl.textContent = message
}

// Conditions 
function conditions(){ 
    if (sum<=20){
      message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
      message= "You've got BlackJack!"
      hasBlackJack = true
    } else {
      message = "You're out of the game:("
      isAlive = false
    }
    messageLine(message)
 }

// Displaying all of the cards
function showCards(){
  cardsEl.textContent = "Cards: "
  for(let i = 0; i<cards.length;i++){
    if(i!=cards.length-1){
      cardsEl.textContent += cards[i] + ", "
    } else {
      cardsEl.textContent += cards[i]
    }
  }
}

// Calculating and displaying the sum value 
function showSum(){
  sum = 0 //Clearing previous value so it doesn't double
  sumEl.textContent = "Sum: "
  for(let i = 0; i<cards.length; i++){
      sum += cards[i]
    }
   sumEl.textContent += sum
  }

function renderGame() {
  showSum()
  showCards()
  conditions()
}


// Starting the game
function startGame() {
  isAlive = true
  // Generating two starting cards
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  // Rendering the game
  renderGame()
  }
  
// Drawing a new card to your hand
function drawCard(){
  conditions()
  if(isAlive === false){
    message = "You have to start a new game."
    messageLine()
  } else {
    let newCard = getRandomCard()
    cards.push(newCard)
    renderGame()
  } 
  
  
}
// CHECKING THE AGE
/*let age = prompt("Please enter your age")

if (age<18){
  alert("You're not old enough to play this game")
} else{
  alert("Welcome!")
}
*/