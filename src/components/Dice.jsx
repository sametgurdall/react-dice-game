import React from "react";


const Dice = ({ number }) => {
    return (
      <div className="dice">
        <img src={`/src/assets/dice${number}.png`} alt={`dice ${number}`} />
        
      </div>
    );
  };
  
  export default Dice;