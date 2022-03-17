import { useEffect, useState } from "react";
import './../../Pages/Fatiha/FatihaPage.css';
import SingleCard from "./SingleCard";

const cardImages = [ //must use require due to webpack to properly locate path
    {"src": require("./../../img/Fatiha-img/1.JPG"), id: 1},
    {"src": require("./../../img/Fatiha-img/2.JPG"), id: 2},
    {"src": require("./../../img/Fatiha-img/3.JPG"), id: 3},
    {"src": require("./../../img/Fatiha-img/4.JPG"), id: 4},
    {"src": require("./../../img/Fatiha-img/5.JPG"), id: 5},
    {"src": require("./../../img/Fatiha-img/6.JPG"), id: 6},
    {"src": require("./../../img/Fatiha-img/7.JPG"), id: 7},
    {"src": require("./../../img/Fatiha-img/8.JPG"), id: 8},
    {"src": require("./../../img/Fatiha-img/9.JPG"), id: 9},
    {"src": require("./../../img/Fatiha-img/10.JPG"), id: 10},
    {"src": require("./../../img/Fatiha-img/11.JPG"), id: 11},
    {"src": require("./../../img/Fatiha-img/12.JPG"), id: 12},
    {"src": require("./../../img/Fatiha-img/13.JPG"), id: 13},
] //array for storing the ayah images 

const FatihaPage = () => {
    const [cards, setCards] = useState([]) //useState hook empty array for updating later on
    const [turns, setTurns] = useState([]) //state for recording number of turns

    //Usestates for two choices in the matching memory game
    const [choice1, setChoice1] = useState(null)
    const [choice2, setChoice2] = useState(null)

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages] //the array of cards to be shuffled
        .sort(() => Math.random() - 0.5) //randomly sorting the array to mix the card orders
        .map((card) => ({...card, id:Math.random()})) //for each card in array is mapped to a new array for the shuffled array

        setCards(shuffledCards)//updating empty card states to be the shuffled cards
        setTurns(0)//

    }

   //handle a choice
   const handleChoice = (card) =>  {
       choice1 ? setChoice2(card): setChoice1(card) //if choice1 is not null then setChoice2 or else setChoice1 (ternary operator)
   }
   //compare 2 selected cards
   useEffect(() => {
       if (choice1 && choice2) {
           if (choice1.src === choice2.src) {
               console.log('cards match')
               resetTurn()
           } else {console.log('no match')
            resetTurn()}
       }

   }, [choice1, choice2])

   const resetTurn = () => {
       setChoice1(null)
       setChoice2(null) 
       setTurns(turns +1)
   }

    return (
        <div>

       <button onClick={shuffleCards} className="BtnHome" style={{float: 'right', top: '-90px', right: '500px'}}>New Game</button>
       <div className="card-grid"> 
       {cards.map(card => ( //mapping through the each ayah card for displaying
         <SingleCard  
         key={card.id} 
         card={card} 
         handleChoice={handleChoice}
         /> //Key ID to map through each card
       ))}

       </div>
       </div>
      );
}
 
export default FatihaPage;