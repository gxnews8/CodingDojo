function Player(name) {

  this.name = name || 'No Name'
  this.hand = []

}

// draws a card from a deck
Player.prototype.draw = function(deck) {
  if (!deck || deck.deck.length < 1) {
    console.log('There are no cards left in the deck.')
    return -1
  }
  var card = deck.deal()
  this.hand.push(card)
  return this
}

// discards a card from hand[handIdx]
Player.prototype.discard = function(handIdx) {
  this.hand.splice(handIdx, 1)
  return this
}

//
Player.prototype.showHand = function(elem) {
  for (var i = 0; i < this.hand.length; i++) {
    elem.append(`<div class="card">&#${this.hand[i].cardImg};</div>`)
  }
}
