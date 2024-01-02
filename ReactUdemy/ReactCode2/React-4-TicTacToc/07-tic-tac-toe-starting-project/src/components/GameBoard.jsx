const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // const handleSelectSquare = (rowIndex, colIndex)=>{
  //     setGameBoard(prevState => {
  //         const updateBoard = [...prevState]
  //         updateBoard[rowIndex][colIndex] = state1;
  //         return updateBoard
  //     })

  //     appFunc();
  // }

  let gameBoard = initialGameBoard;

  for(const turn of turns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((arr, idx) => {
        return (
          <li key={idx}>
            <ol>
              {arr.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={()=> onSelectSquare(idx, colIndex)}>
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
