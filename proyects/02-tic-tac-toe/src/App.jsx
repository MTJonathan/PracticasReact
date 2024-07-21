import{ useState } from 'react'
import confetti from "canvas-confetti"
const turns ={
  X: '✘',
  O: '○',
}

const Square = ({children,isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div onClick={handleClick} className={className} >
      {children}
    </div>
  )
}
const winner_combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
function App() {
  const [board, setBoard] = useState(() => {
    //Carga el tablero desde el localStorage
    const boardFromStore = window.localStorage.getItem('board')
    return boardFromStore ? JSON.parse(boardFromStore) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStore = window.localStorage.getItem('turn')
    return turnFromStore ?? turns.X
  })
  const [winner, setWinner] = useState(null) //null: no hay ganador, false : hay empate

  const checkForWinner = (boardToCheck) => {
    for (const combo of winner_combos) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }
  const updateBoard = (index) => {
    //Verifica que el tablero no este lleno
    if(board[index] || winner) return

    //Actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambia el turno
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    //Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //Verifica si hay ganador
    const newWinner = checkForWinner(newBoard)
    if(newWinner) {
      //Hay un ganador
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      //Hay un empate
      setWinner(false)
    }
  }
  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className="game">
            {
              board.map((_, index) => {
                return (
                  <Square 
                    key={index} 
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {board[index]}
                  </Square>
                )
              })
            }
        </section>
        <section className='turn'>
          <Square isSelected={turn === turns.X}>
            {turns.X}
          </Square>
          <Square isSelected={turn === turns.O}>
            {turns.O}
          </Square>
        </section>
        <button onClick={resetGame}>Reiniciar</button>
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false 
                    ? 'Empate'
                    : 'Gano:' 
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>
                    Reiniciar
                  </button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
      
    </>
  )
}

export default App