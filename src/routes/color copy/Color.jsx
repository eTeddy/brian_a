import './Color.css';
import { useState } from 'react';
import colorName from 'color-name';

const Color = () => {
  const [color, setColor] = useState('#FFC0CB');
  const [colorName, setColorName] = useState('');

  const getRandomColor = () => {
    const color_random = '#' + Math.floor(100000 + Math.random() * 900000);
    setColor(color_random);
    const name = colorName(color_random);
    if (name) {
      setColorName(name[1]);
    } else {
      setColorName('Not Found');
    }
  };

  return (
    <div id="color-container">
      <h1>🌈Random Color Generator</h1>
      <div className="color_display" style={{ background: color }}></div>
      <h3>{color}</h3>
      {/* {colorName && <h4>Color name: {colorName}</h4>} */}
      <h4>Color name: {colorName}</h4>
      <button onClick={getRandomColor}>New 🌈 Color</button>
    </div>
  );
};

export default Color;


/*

import './Color.css';
import { useState } from 'react';
import colorName from 'color-name';

const Color = () => {
  
  const allColor = Object.keys(colorName).map((key) => {
    const hex = `#${colorName[key].join('')}`;
    return (
      <div key={key}>
        <span style={{ backgroundColor: hex }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {key} ({hex})
        <div className="color_display" style={{ background: hex }}></div>
      </div>
    );
  });

  return (
    <div id="color-container" style={{ backgroundColor: '#f5f5f5' }}>
      <h1>Random Color Generator</h1>
      <div>{allColor}</div>
    </div>
  );
};

export default Color;










import './Color.css';
import { useState } from 'react';
import colorName from 'color-name';

const Color = () => {
  const [color, setColor] = useState('#FFC0CB');
  const [colorName, setColorName] = useState('');

  const getRandomColor = () => {
    const color_random = '#' + Math.floor(100000 + Math.random() * 900000);
    setColor(color_random);
    const name = colorName(color_random);
    if (name) {
      setColorName(name[1]);
    } else {
      setColorName('');
    }
  };

  return (
    <div id="color-container">
      <h1>Random Color Generator</h1>
      <div className="color_display" style={{ background: color }}></div>
      <h3>{color}</h3>
      {colorName && <h4>Color name: {colorName}</h4>}
      <button onClick={getRandomColor}>New 🌈 Color</button>
    </div>
  );
};

export default Color;
*/