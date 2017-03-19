
function Card(suite, val) {

  this.suite = suite
  this.val = val
  this.hiddenHex = 'x1f0a0'
  this.weight = this.getCardWeight()

  this.cardImg = this.getCardImg()
  this.cardStr = this.getCardStr()
}

// generate the card's unicode hex
Card.prototype.getCardImg = function() {
  var unicodeString
  var spades = 'x1f0a'
  var hearts = 'x1f0b'
  var diamonds = 'x1f0c'
  var clubs = 'x1f0d'

  // handle face cards
  var tempVal = this.val
  if (this.val == 10) { tempVal = 'a' }
  else if (this.val == 11) { tempVal = 'b' }
  else if (this.val == 12) { tempVal = 'd' }
  else if (this.val == 13) { tempVal = 'e' }

  // get string for the unicode
  if (this.suite == 'spades') { unicodeString = spades + tempVal }
  else if (this.suite == 'hearts') { unicodeString = hearts + tempVal }
  else if (this.suite == 'diamonds') { unicodeString = diamonds + tempVal }
  else if (this.suite == 'clubs') { unicodeString = clubs + tempVal }

  return unicodeString
}

// returns a string like 'Ace of Spades'
Card.prototype.getCardStr = function() {
  var cardVal = this.val
  var suiteCap = this.suite.charAt(0).toUpperCase() + this.suite.slice(1)

  if (cardVal == '1') { cardVal = 'Ace' }
  else if (cardVal == '11') { cardVal = 'Jack' }
  else if (cardVal == '12') { cardVal = 'Queen' }
  else if (cardVal == '13') { cardVal = 'King' }

  return `${cardVal} of ${suiteCap}`
}

Card.prototype.getCardWeight = function() {
  if (this.val == 1) {
    return 11
  }
  else if (this.val > 10) {
    return 10
  }
  else {
    return this.val
  }
}
