import { useState } from "react";
import './../../Pages/Fatiha/FatihaPage.css';
import cover from './../../img/cover.jpg';

const cardImages = [ //must use require due to webpack to properly locate path
    {"src": require("./../../img/Fatiha-img/1.JPG")},
    {"src": require("./../../img/Fatiha-img/2.JPG")},
    {"src": require("./../../img/Fatiha-img/3.JPG")},
    {"src": require("./../../img/Fatiha-img/4.JPG")},
    {"src": require("./../../img/Fatiha-img/5.JPG")},
    {"src": require("./../../img/Fatiha-img/6.JPG")},
    {"src": require("./../../img/Fatiha-img/7.JPG")},
    {"src": require("./../../img/Fatiha-img/8.JPG")},
    {"src": require("./../../img/Fatiha-img/9.JPG")},
    {"src": require("./../../img/Fatiha-img/10.JPG")},
    {"src": require("./../../img/Fatiha-img/11.JPG")},
    {"src": require("./../../img/Fatiha-img/12.JPG")},
    {"src": require("./../../img/Fatiha-img/13.JPG")},
] //array for storing the ayah images 

const FatihaPage = () => {
    const [cards, setCards] = useState([]) //useState hook empty array for updating later on
    const [turns, setTurns] = useState([]) //state for recording number of turns

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages] //the array of cards to be shuffled
        .sort(() => Math.random() - 0.5) //randomly sorting the array to mix the card orders
        .map((card) => ({...card, id:Math.random()})) //for each card in array is mapped to a new array for the shuffled array

        setCards(shuffledCards)//updating empty card states to be the shuffled cards
        setTurns(0)//

    }

   

    return (
        <div>

       <button onClick={shuffleCards} className="BtnHome" style={{float: 'right', top: '-50px', right: '500px'}}>New Game</button>
       <div className="card-grid"> 
       {cards.map(card => ( //mapping through the each ayah card for displaying
           <div className="card" key={card.id} /*div for card itself with the card id for randomizing*/>
               <div /*sub div for front and back of each ayah card*/>
                   <img className="front" src={card.src} alt="card front error" /*each mapped ayah card image*/ /> 
                   <img className="back" src={cover} alt="card back error" /*back img for each mapped card*/ />
               </div>
           </div>
       ))}

       </div>
       </div>
      );
}
 
export default FatihaPage;