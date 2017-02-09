
namespace DeckOfCards {

    public class Card {
        public int numVal;
        public string val { get {
                if(numVal > 1 && numVal < 11) {
                    return numVal.ToString();
                } else if (numVal == 11) {
                    return "Jack";
                } else if (numVal == 12) {
                    return "Queen";
                } else if (numVal == 13) {
                    return "King";
                } else if (numVal == 1) {
                    return "Ace";
                } else {
                    return "Joker";
                }
            }
        }
        public string suit;

        public Card(string s, int num) {
            suit = s;
            numVal = num;
        }

        public override string ToString(){
            return val + " of " + suit;
        }
    }
}