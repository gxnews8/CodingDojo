function Card(suit, rank){
	this.suit = suit
	this.rank = rank
}

Card.prototype.print = function(){
	var suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
	var ranks = {
		1: "Ace",
		11: "Jack",
		12: "Queen",
		13: "King"
	}

	if(this.rank >= 2 && this.rank <= 10){
		return `${this.rank} of ${suits[this.suit]}`
	} else {
		return `${ranks[this.rank]} of ${suits[this.suit]}`
	}
}

function Deck(){
	var deck = []

	for(var suit=0; suit<4;suit++){
		for(var rank=1; rank<=13; rank++){
			deck.push(new Card(suit, rank))
		}
	}

	this.shuffle = function(){
		for(var card = 0; card < deck.length; card++){
			var other = Math.floor(Math.random() * deck.length)
			var temp = deck[card]
			deck[card] = deck[other]
			deck[other] = temp
		}
	}

	this.deal = function(){
		return deck.pop()
	}
}

var my_deck = new Deck()

my_deck.shuffle()

for(card=0; card<52; card++){
	console.log(my_deck.deal().print())
}
