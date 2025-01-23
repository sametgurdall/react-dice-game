import React from "react";

const Name = ({ name, setName }) => {
  const handleChange = (e) => setName(e.target.value);

  return (
    <div className="player-name">
      <label htmlFor="player1-name">Your Name:</label>
      <input
        id="player1"
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Name;