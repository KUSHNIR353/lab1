import { useState } from 'react';
import './App.css';

function App() {
  const [sign, setSign] = useState(7777);

  const getRandomSignNumber = () => {
    alert('Be careful on the road! Lucky plate number can wait ;3');
    setSign(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
  };

  return (
    <div className='App'>
      <span className='description'>
        This site is roll your *happy* car plate number
        <br /> Try to find it on cars during the day
        <br /> And the luck will follow u for week
      </span>

      <div className='auto_sign'>
        <div className='prapor'>
          <div className='blue'></div>
          <div className='yellow'>
            <p className='ua_sign'>UA</p>
          </div>
        </div>
        <p className='numbers'>{sign}</p>
      </div>
      <button className='btn' onClick={getRandomSignNumber}>
        Roll plate number
      </button>
    </div>
  );
}

export default App;
