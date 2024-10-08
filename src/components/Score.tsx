const expectedAnswers = [
    'Bob',
    'Toronto'
];

export const Score = ({answers}: {answers: string[]}) => {
    const calculateScore = () => {
        let numberCorrect = 0;
        answers.forEach((value, index) => {
            if (value === expectedAnswers[index]) {
                numberCorrect++;
            }
        })

        return (
            <div>{(numberCorrect / expectedAnswers.length) * 100}% Correct</div>
        )
    }

    return (
        <div>
            Your score: {calculateScore()}
        </div>
    )
}