import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(10);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    let timer: number=0;
    if (started) {
      timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime == 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [started]);

  const handleButtonClick = () => {
    if (started) {
      setStarted(false);
      setTime(10);
    } else {
      setStarted(true);
    }
  };

  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleButtonClick} type="button">{started?`Reset`:`Start`}</button>
    </>
  )
}

export default App
