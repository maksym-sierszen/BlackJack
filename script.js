// Setting variables
let hasBlackJack = false
let isAlive = true
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let firstCard = 0
let secondCard = 0
let sum = 0
let cards = []

// Generating two random cards at the start of new game
function startingCards(){
  firstCard = Math.floor(Math.random() * 11) + 2
  secondCard = Math.floor(Math.random() * 11) + 2
  cards = [firstCard, secondCard]
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
    messageEl.textContent = message
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


// Starting the game
function startGame() {
  startingCards()
  conditions()
  showSum()
  showCards()
    
  }
  
// Drawing a new card to your hand
function drawCard(){ 
  let newCard = Math.floor(Math.random() * 11) + 2
  cards.push(newCard)
  showCards()
  showSum()
  conditions() 
}

// CHECKING THE AGE
/*let age = prompt("Please enter your age")

if (age<18){
  alert("You're not old enough to play this game")
} else{
  alert("Welcome!")
}
*/