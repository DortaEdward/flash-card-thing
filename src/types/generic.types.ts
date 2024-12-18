
// docs

type User = {}


type CardState = "new" | "learing" | "review_young" | "review_mature" | "relearn";

// Cards can be in multiple deck
type Card = {
  question: string;
  answer: string;
  images: string[];
  state: CardState;
}

type Deck = {}

type Category = {}
