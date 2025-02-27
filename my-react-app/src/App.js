import logo from './logo.svg';
import React, { useState } from 'react';
import TestPage from './pages/TestPages.jsx';
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <TestPage />
    </div>
  );
}

export default App;