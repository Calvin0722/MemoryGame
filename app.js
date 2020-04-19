document.addEventListener('DOMContentLoaded', () => {
    // Card options
    const cards = [
        {
            name: 'coin',
            img: 'images/coin.png'
        },
        {
            name: 'coin',
            img: 'images/coin.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'mushroom',
            img: 'images/mushroom.png'
        },
        {
            name: 'mushroom',
            img: 'images/mushroom.png'
        },
        {
            name: 'question',
            img: 'images/question.png'
        },
        {
            name: 'question',
            img: 'images/question.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'box',
            img: 'images/box.png'
        },
        {
            name: 'box',
            img: 'images/box.png'
        },
    ]

    cards.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [] 
    var cardsChosenId = []
    var cardsWon = []
    // Pick up the element in HTML whose class name is grid

    // Create the board
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            var card = document.createElement("img") // Crate an image element
            card.setAttribute('src', 'images/blank.png') // Set the image src to default blank
            card.setAttribute('data-id', i) // Set the id to i
            card.addEventListener('click', flipcard) // Add flipcard as an event listener for click
            grid.appendChild(card) // Add card as a child of grid
        }
    }

    // Creck for matches
    function checkForMatch () {
        var cardList = document.querySelectorAll('img') // Get all the images from the HTML
        const optionOneID = cardsChosenId[0]
        const optionTwoID = cardsChosenId[1]
        if (cardsChosenId[0] === cardsChosenId[1]) {
            alert("Please do not choose the same card")
            cardList[optionOneID].setAttribute('src', 'images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!")
            cardList[optionOneID].setAttribute('src', 'images/white.png')
            cardList[optionTwoID].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosenId[0])
            cardsWon.push(cardsChosenId[1])
        } else {
            cardList[optionOneID].setAttribute('src', 'images/blank.png')
            cardList[optionTwoID].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length/2
        if (cardsWon.length === cards.length) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    // Flip the card
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        if (! cardsWon.includes(cardId)) {
            cardsChosen.push(cards[cardId].name)
            cardsChosenId.push(cardId) // Push the id and name onto the array
            this.setAttribute('src', cards[cardId].img) // Change the image
        }
        if (cardsChosen.length === 2) { // Check for match if two cards are chosen
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})