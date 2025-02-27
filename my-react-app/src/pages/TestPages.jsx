// src/pages/TestPage.jsx
import React, { useState } from 'react';
import '../css/TestPage.css';

function TestPage() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="test-page">
      <h1>React 테스트 페이지</h1>
      
      <section className="counter-section">
        <h2>카운터 테스트</h2>
        <p>현재 카운트: {count}</p>
        <button onClick={handleIncrement}>증가</button>
      </section>

      <section className="input-section">
        <h2>입력 테스트</h2>
        <input 
          type="text" 
          value={inputText}
          onChange={handleInputChange}
          placeholder="텍스트를 입력하세요"
        />
        <p>입력된 텍스트: {inputText}</p>
      </section>
      
    </div>
  );
}

export default TestPage;