import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'
const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext)

  return (
    <div className='menu'>
        <button onClick={()=>{
            setGameState('quiz')
        }}>Start Your Quiz</button>
    </div>
  )
}

export default MainMenu
