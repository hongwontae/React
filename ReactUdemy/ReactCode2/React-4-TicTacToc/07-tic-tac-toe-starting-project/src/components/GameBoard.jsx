import { useState } from "react"

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

const GameBoard = ()=>{

    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const handleSelectSquare = (rowIndex, colIndex)=>{
        setGameBoard(prevState => {
            const updateBoard = [...prevState]
            console.log(updateBoard)
            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard
        })
    }
    

    return(
        <ol id="game-board">
            {gameBoard.map((arr,idx)=>{
                return <li key={idx}>
                    <ol>
                        {arr.map((col, colIndex)=>{
                            return <li key={colIndex}><button onClick={()=>handleSelectSquare(idx, colIndex)}>{col}</button></li>
                        })}
                    </ol>
                </li>
            })}
        </ol>
    )
}

export default GameBoard;