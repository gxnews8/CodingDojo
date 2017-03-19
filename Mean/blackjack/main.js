
// var name = prompt('What is your name?')
var name = 'Miranda'

// append game html to DOM
$('#main').append(Tmpls.boardTmpl(name))

var game = new Game(new Player(name), new Dealer())

$('.deal').on('click', function(e) {
  e.preventDefault()
  game.dealCards()
})
