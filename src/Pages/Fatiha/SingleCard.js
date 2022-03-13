import cover from './../../img/cover.jpg'

import './../../Pages/Fatiha/SingleCard.css'

const SingleCard = ({card}) => {
    return (  
    <div className="card" /*div for card element for styling*/>
        <div /*sub div for front and back of each ayah card*/>
            <img className="front" src={card.src} alt="card front error" /*each mapped ayah card image*/ /> 
            <img className="back" src={cover} alt="card back error" /*back img for each mapped card*/ />
        </div>
    </div>
    );
}
 
export default SingleCard;