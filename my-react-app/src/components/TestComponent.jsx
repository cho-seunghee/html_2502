// src/components/TestComponent.jsx
import React from 'react';

function TestComponent({ title, children }) {
  return (
    <div className="test-component">
      <h3>{title}</h3>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default TestComponent;