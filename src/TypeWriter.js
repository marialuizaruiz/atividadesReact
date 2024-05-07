import React, { useState, useEffect } from 'react';

function TypeWriter() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; 

  const originalText = 'Conheça a Fatec';

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < originalText.length) {
        setText((prevText) => prevText + originalText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setText('');
        setIndex(0);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [index]); 

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default TypeWriter;