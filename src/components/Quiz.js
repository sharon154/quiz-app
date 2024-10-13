import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
import '../App.css';

const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');

    const nextQuestion = () => {
        if (!optionChosen) {
            setErrorMessage('Please select an option');
            return; // Early return if no option is chosen
        }

        // If an option is chosen, check the answer
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }

        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen(''); // Reset chosen option for the next question
        setErrorMessage(''); // Clear error message
    };

    const finishQuiz = () => {
        if (!optionChosen) {
            setErrorMessage('Please select an option');
            return; // Early return if no option is chosen
        }

        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }

        setGameState('endScreen');
    };

    return (
        <div className='quiz'>
            <h1>{Questions[currentQuestion].prompt}</h1>
            {errorMessage && <span style={{ color: 'lightpink', letterSpacing: '0.04em' }}>{errorMessage}</span>}

            <div className="options">
                <button 
                    style={{ backgroundColor: optionChosen === 'A' ? '#b2b6f3' : '' }}
                    onClick={() => { setOptionChosen('A'); setErrorMessage(''); }}
                >
                    {Questions[currentQuestion].optionA}
                </button>
                <button 
                    style={{ backgroundColor: optionChosen === 'B' ? '#b2b6f3' : '' }}
                    onClick={() => { setOptionChosen('B'); setErrorMessage(''); }}
                >
                    {Questions[currentQuestion].optionB}
                </button>
                <button 
                    style={{ backgroundColor: optionChosen === 'C' ? '#b2b6f3' : '' }}
                    onClick={() => { setOptionChosen('C'); setErrorMessage(''); }}
                >
                    {Questions[currentQuestion].optionC}
                </button>
                <button 
                    style={{ backgroundColor: optionChosen === 'D' ? '#b2b6f3' : '' }}
                    onClick={() => { setOptionChosen('D'); setErrorMessage(''); }}
                >
                    {Questions[currentQuestion].optionD}
                </button>
            </div>
            {currentQuestion === Questions.length - 1 ? 
                (<button onClick={finishQuiz}>Check Score</button>) : 
                (<button onClick={nextQuestion}>Next</button>)
            }
        </div>
    );
};

export default Quiz;
