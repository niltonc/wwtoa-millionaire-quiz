import "../styles/App.css";
import { useEffect, useState } from "react";

import Start from "../components/Start";
import Timer from "../components/Timer";
import Trivia from "../components/Trivia";

import data from "../mock/questions";
import moneyPyramid from "../mock/moneypyramid";
import MoneyPyramid from "../components/moneyPyramid";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <Timer
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                  />
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <MoneyPyramid
            options={moneyPyramid}
            questionNumber={questionNumber}
          />
        </>
      )}
    </div>
  );
}

export default App;
