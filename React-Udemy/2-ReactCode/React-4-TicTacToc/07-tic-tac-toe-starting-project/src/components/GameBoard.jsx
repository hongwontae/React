

const GameBoard = ({ onSelectSquare, board }) => {


  return (
    <ol id="game-board">
      {board.map((arr, idx) => {
        return (
          <li key={idx}>
            <ol>
              {arr.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => onSelectSquare(idx, colIndex)} disabled={col !== null}>
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
