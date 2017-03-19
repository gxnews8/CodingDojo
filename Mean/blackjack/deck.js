
function Deck() {
  this.deck = []
  this.populateDeck().shuffle().shuffle().shuffle()
}

// adds 52 cards to this.deck[]
Deck.prototype.populateDeck = function() {
  var suites = ['spades', 'hearts', 'diamonds', 'clubs']

  for (var i = 0; i < suites.length; i++) {
    for (var j = 1; j < 14; j++) {
      var card = new Card(suites[i], j)
      this.deck.push(card)
    }
  }

  return this
}

// shuffle the deck, can be chained
Deck.prototype.shuffle = function() {
  if (!this.deck.length) {
    console.log('Deck has not been populated!')
    return -1
  }

  for (var i = 0; i < this.deck.length; i++) {
    var tmp
    var rand = getRandom()
    tmp = this.deck[i]
    this.deck[i] = this.deck[rand]
    this.deck[rand] = tmp
  }

  function getRandom() {
    return Math.floor(Math.random() * (52 - 0) + 0)
  }

  return this
}

// reset
Deck.prototype.reset = function() {
  this.deck = []
  this.populateDeck().shuffle().shuffle().shuffle()
}


// deal
Deck.prototype.deal = function() {
  return this.deck.pop()
}
