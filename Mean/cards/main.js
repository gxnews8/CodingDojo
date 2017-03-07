function Deck(){
  // When constructor funtion is invoked, run this code to populate deck with cards
  this.buildDeck();
}

Deck.prototype.buildDeck = function(){
  var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
      values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
      // Capture snapshot of this for use in callback function
      self = this;

  // Set up cards in deck as empty array
  this.cards = [];
  // Nested for loops iterate over suits and values to create new cards
  suits.forEach(function(suit){
    values.forEach(function(value){
      self.cards.push(new Card(value, suit));
    });
  });
  return this;
}

Deck.prototype.shuffle = function(){
  // Used https://bost.ocks.org/mike/shuffle/ to build shuffle logic
  var unshuffledEdge = this.cards.length,
      cardToShuffleIdx,
      temp;

  // While there remain elements to shuffle…
  while (unshuffledEdge > 0) {
    // Pick an element in the unshuffled portion…
    cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
    // Move the unshuffledEdge closer to front of array
    unshuffledEdge -= 1;

    // And swap the chosen card to the back
    temp = this.cards[cardToShuffleIdx]
    this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge]
    this.cards[unshuffledEdge] = temp;
  }
  return this
}

Deck.prototype.reset = function(){
  this.buildDeck().shuffle();
}

Deck.prototype.dealRandomCard = function(){
  return (this.cards.length > 0) ? this.cards.pop() : null;
}

function Card(value, suit){
  this.value = value;
  this.suit = suit;
}

function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.takeCard = function(deck){
  // Method recieves a deck, and pulls a card from the deck to add to player's hand
  this.hand.push(deck.dealRandomCard());
  return this;
}

Player.prototype.discard = function(cardIdx){
  // Method recieves a location of the card to remove and deletes it from player's hand.
  if (this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
}

// NOW GO BUILD A GAME!
