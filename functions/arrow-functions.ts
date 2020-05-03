/**
 * This keyword & Arrow Functions
 * this keyword is a powerfull keyword to express the current 
 * scope of function. However, in a function the scope of the
 * this keyword is restricted with its scope. * 
 */


 /**
  * This anonymus function makes trouble on run, since the
  * this keyword will the scope as "window" rather then 
  * deckWithOutArrow object, the code will fail.
  */ 

let deckWithOutArrow = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
      return function() {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
  };
  
  let cp = deckWithOutArrow.createCardPicker();
  let pc = cp();
  
  alert("card: " + pc.card + " of " + pc.suit);

  /**
   * This pitfall can be fixed by using arrow functions.
   * The Arrow functions capture the this where the function 
   * is created rather than where it is invoked
   */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
  };
  
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  
  alert("card: " + pickedCard.card + " of " + pickedCard.suit);