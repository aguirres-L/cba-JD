import React, { useState } from 'react';
import './Card.css';

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`card1-container ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card1">
        <div className="front">
         <img src={backContent} alt={backContent} />
        </div>
        <div className="back" onClick={(e)=>console.log(e.target)}>
        {frontContent}
        </div>
      </div>
    </div>
  );
}

export default Card;
