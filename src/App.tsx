import {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import {Difficulty, fetchQuestions, QuestionState} from './API';
import {GlobalStyle, Wrapper} from './app.styles';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
function App() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY,
        );
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // get users answer
            const answer = e.currentTarget.value;
            // check answer
            const correct = questions[number].correct_answer === answer;
            // set score
            if (correct) setScore((prev) => prev + 1);
            // save answer
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        }
        setNumber(nextQuestion);
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper className='App'>
                <h1>React Quiz App</h1>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className='start' onClick={startTrivia}>
                        Start
                    </button>
                ) : null}
                {!gameOver ? <p className='score'>Score:{score}</p> : null}
                {loading ? <p>Loading...</p> : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNumber={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers[number]}
                        callback={checkAnswer}
                    />
                )}
                {!gameOver &&
                !loading &&
                userAnswers.length === number + 1 &&
                number !== TOTAL_QUESTIONS - 1 ? (
                    <button className='next' onClick={nextQuestion}>
                        Next Question
                    </button>
                ) : null}
            </Wrapper>
        </>
    );
}

export default App;
