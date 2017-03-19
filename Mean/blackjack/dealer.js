
function Dealer() {
  this.hand = []
}

Dealer.prototype.draw = function(deck) {
  if (!deck || deck.deck.length < 1) {
    console.log('There are no cards left in the deck.')
    return -1
  }
  var card = deck.deal()
  this.hand.push(card)
  return this
}

// pass in jquery elem and appends card w/ unicode
Dealer.prototype.showHand = function(elem, dealerTurn) {
  var str = ''

  for (var i = 0; i < this.hand.length; i++) {
    // probs not effient to do this is loop
    var cond
    if (dealerTurn) {
      cond = this.hand[i].cardImg
    }
    else {
      cond = i == 0 ? this.hand[i].hiddenHex : this.hand[i].cardImg
    }
    str += `<div class="card">&#${cond};</div>`
  }
  elem.html(str)
}
