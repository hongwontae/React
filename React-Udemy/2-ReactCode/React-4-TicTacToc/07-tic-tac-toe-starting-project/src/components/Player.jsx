import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
    if(isEditing){
      onChangeName(symbol, playerName)
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editableName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
