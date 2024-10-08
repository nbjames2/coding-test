import React, { useState } from 'react';
import {Score} from './components/Score'
import { Test } from './components/Test';
import './App.css';

function App() {
  const [inTest, setInTest] = useState<boolean>(false)
  const [answers, setAnswers] = useState<string[]>([])

  const finish = () => {
    setInTest(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!inTest && answers.length
          ? <Score answers={answers} />
          : !inTest ? <button onClick={() => setInTest(true)}>Start Test</button> : <Test answers={answers} setAnswers={setAnswers} finish={finish} />
        }
      </header>
    </div>
  );
}

export default App;
