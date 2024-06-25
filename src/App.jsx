import  { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className='color-container'>
      <div style={{ backgroundColor: color, color: 'white' }} className="color-box"></div>
      <button onClick={getRandomColor} >
        Click me for a random color
      </button>
    </div>
  );
}

export default App;