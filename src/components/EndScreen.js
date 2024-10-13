import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank';
import '../App.css'

const EndScreen = () => {
    const { score, setScore, setGameState } = useContext(QuizContext)
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    }

    return (
        <div className='end-screen'>
            <h1>Your Score</h1>
            <h1>{ score} / { Questions.length}</h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
