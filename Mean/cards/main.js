console.log('hello main!!!')

var newDeck = new Deck()
// console.log(newDeck)
// newDeck.reset()
// console.log(newDeck)
// console.log(newDeck.deck.length)
// newDeck.populateDeck()
// console.log(newDeck)

var p1 = new Player('Matt')
var p2 = new Player('Computer')

p1.draw(newDeck).draw(newDeck).draw(newDeck).draw(newDeck)
p2.draw(newDeck).draw(newDeck).draw(newDeck).draw(newDeck)

console.log(p1)
console.log(p2)
console.log(newDeck)

$('#main').append(`<h2>Player hand</h2>`)
p1.showHand($('#main'))

$('#main').append(`<h2>Dealer hand</h2>`)
p2.showHand($('#main'))

p1.discard(1)

// for (var i = 0; i < p2.hand.length; i++) {
//   $('#main').append(`&#${p2.hand[i].cardImg};`)
// }
