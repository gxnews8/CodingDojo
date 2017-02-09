using System;

namespace DeckOfCards
{
    
    public class Program
    {
        public static void Main(string[] args)
        {
            Card myCard = new Card("Clubs", 6);
            Card myCard2 = new Card("Hearts", 1);
            Deck myDeck = new Deck();
            Console.WriteLine(myDeck);
            myDeck.shuffle();
            Console.WriteLine(myDeck);
        }
    }
}
