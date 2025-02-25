import {AnswerObject} from '../App';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject;
    questionNumber: number;
    totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
}) => {
    return (
        <div>
            <p className='number'>
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers?.map((answer, idx) => (
                    <div key={idx}>
                        <button
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}
                        ></button>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
