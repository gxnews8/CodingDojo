using System;
using System.Collections.Generic;

namespace DeckOfCards {

    public class Player {
        public string name {get; set;}
        private List<Card> hand = new List<Card>();
        public Player(string n) {
            name = n;
        }
        public void Draw(Deck deck) {
            hand.Add(deck.deal());
        }
    }
}