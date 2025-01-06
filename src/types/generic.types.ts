
// docs

type User = {}

type CardState = "new" | "learing" | "review_young" | "review_mature" | "relearn";

type Category = string

// Cards can be in multiple deck
type Card = {
  question: string;
  answer: string;
  images: string[];
  state: CardState;
  category: Category;
  displayInterval: string;
}

type Deck = {
  name: string
  category: Category;
  cards: Card[]
  displayInterval: string;
  decks: Deck[]
}

/*
 - the user tells the person how well they 
 remembered the answer, based on that the 
 program decides when is the next time 
 to show the card again
  - the card as a interval 
   - young -  a card that has a interval of less than 21 days
   - mature -  a card that has an interval of 21 days or more
a
- the deck tracks how many new cards to show each day or how long to wait until cards are shown again
- decks can contain other decks
- :: is used to show the different levels within a deck tree
*/
