using System;
using System.Collections.Generic;

namespace DeckOfCards {
    public class Deck {
        public List<Card> cards;

        public Deck(){
            reset();
        }

        public void reset(){
            cards = new List<Card>();
            string[] suits = new string[4] {"Hearts", "Clubs", "Spades", "Diamonds"};
            for(int i = 0; i < suits.Length; i++){
                for(int n = 1; n < 14; n ++) {
                    cards.Add(new Card(suits[i], n));
                }
            }
        }

        public Card deal() {
            Card toReturn = cards[0];
            cards.RemoveAt(0);
            return toReturn;
        }

        public void shuffle(){
            Random rand = new Random();
            for(var i = cards.Count - 1; i > 0; i--) {
                int randIdx = rand.Next(cards.Count - i);
                Card swap = cards[i];
                cards[i] = cards[randIdx];
                cards[randIdx] = swap;
            }
        }

        public override string ToString() {
            string str = "";
            foreach(Card card in cards) {
                str += card + "\n";
            }
            return str;
        }
    }
}