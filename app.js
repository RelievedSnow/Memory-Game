const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'chocolate',
        img: 'images/chocolate.png'
    },
    {
        name: 'drinks',
        img: 'images/drinks.png'
    },
    {
        name: 'ice-creme',
        img: 'images/ice-creme.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'chocolate',
        img: 'images/chocolate.png'
    },
    {
        name: 'drinks',
        img: 'images/drinks.png'
    },
    {
        name: 'ice-creme',
        img: 'images/ice-creme.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())  // sort the array randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChoosen = []
let cardsChoosenIds = []
const cardsWon = []

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png' )
        cards[optionTwoId].setAttribute('src', 'images/blank.png' )
        alert("You have clicked the same image")
    }

    if (cardChoosen[0] == cardChoosen[1]){
        alert('You Found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png' )
        cards[optionTwoId].setAttribute('src', 'images/white.png' )
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChoosen)
    } 
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png' )
        cards[optionTwoId].setAttribute('src', 'images/blank.png' )
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length 
    cardChoosen = []
    cardsChoosenIds = []

    if(cardsWon.length == cardArray.length / 2){
        resultDisplay.textContent ='Congratulations! You Found them All!' 
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    console.log(cardChoosen)
    console.log(cardsChoosenIds)
    console.log("clicked", cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
