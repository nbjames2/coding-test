import { useState } from "react"

const questions = [
    'Who are you?',
    'What is your birthplace?'
]

interface Props {
    answers: string[]
    setAnswers: (val: string[]) => void
    finish: () => void
}

export const Test = ({ answers, setAnswers, finish }: Props): JSX.Element => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [answer, setAnswer] = useState<string>('')

    const saveAndNext = () => {
        setAnswers([...answers, answer])
        setAnswer('')
        if (currentQuestion === questions.length - 1) finish()
        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div>
            <div>{questions[currentQuestion]}</div>
            <input type="text" placeholder="answer" onInput={(e) => setAnswer(e.currentTarget.value)} value={answer}/>
            <button onClick={() => saveAndNext()}>Submit Answer</button>
        </div>
    )
}