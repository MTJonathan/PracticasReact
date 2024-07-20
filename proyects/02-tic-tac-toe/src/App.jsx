import{ useState } from 'react'
const turns ={
  X: 'x',
  O: 'o',
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
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.X)
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

    //Verifica si hay ganador
    const newWinner = checkForWinner(newBoard)
    if(newWinner) {
      //Hay un ganador
      setWinner(newWinner)
      setTimeout(() => {
        alert('El ganador es ' + newWinner)
      }, 500)
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
      </main>
      
    </>
  )
}

export default App
