import React from 'react';
import Goals from '../features/goals/Goals';
import ImageSliders from '../features/imageSliders/imageSliders';

import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSliders />
      <Goals />
    </div>
  );
}

export default App;
