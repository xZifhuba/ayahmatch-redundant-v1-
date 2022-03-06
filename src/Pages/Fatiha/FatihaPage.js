import { useState } from "react"

const cardImages = [
    {"src": "/img/Fatiha-img/1.jpg"},
    {"src": "/img/Fatiha-img/2.jpg"},
    {"src": "/img/Fatiha-img/3.jpg"},
    {"src": "/img/Fatiha-img/4.jpg"},
    {"src": "/img/Fatiha-img/5.jpg"},
    {"src": "/img/Fatiha-img/6.jpg"},
    {"src": "/img/Fatiha-img/7.jpg"},
    {"src": "/img/Fatiha-img/8.jpg"},
    {"src": "/img/Fatiha-img/9.jpg"},
    {"src": "/img/Fatiha-img/10.jpg"},
    {"src": "/img/Fatiha-img/11.jpg"},
    {"src": "/img/Fatiha-img/12.jpg"},
    {"src": "/img/Fatiha-img/13.jpg"},
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
    console.log(cards, turns)

    return (
       <button onClick={shuffleCards} className="BtnHome" style={{float: 'right', top: '-50px', right: '500px'}}>New Game</button>
      );
}
 
export default FatihaPage;