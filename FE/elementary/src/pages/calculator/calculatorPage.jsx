import React, { useState } from 'react';
import '../calculator/cal.css'; 

const CalculatorPage = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className='container-c'>
      <div className="calculator">
      {/* Màn hình hiển thị */}
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>

      {/* Bàn phím máy tính */}
      <div className="buttons">
        {['7', '8', '9', '/'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {['0', '.', '=', '+'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button className="button" onClick={() => handleClick('C')}>
          C
        </button>
      </div>
      </div>
    </div>
    
  );
};

export default CalculatorPage;