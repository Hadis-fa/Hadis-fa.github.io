import React, { useEffect, useState } from 'react';
import '../App.css';

function TypingText() {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const mainText = 'print("NOT YOUR AVERAGE SOFTWARE ENGINEER");';
  const preIdeaText = 'Get ready to turn your ';
  const ideaText = 'ideas';
  const postIdeaText = ' into ';
  const realityText = 'reality';
  const endText = '.';

  useEffect(() => {
    let mainIndex = 0;
    let subIndex = 0;
    let fullSubText = `${preIdeaText}${ideaText}${postIdeaText}${realityText}${endText}`;

    const mainInterval = setInterval(() => {
      if (mainIndex < mainText.length) {
        setText((prev) => prev + mainText.charAt(mainIndex));
        mainIndex++;
      } else {
        clearInterval(mainInterval);
        setIsFinished(true);

        const subInterval = setInterval(() => {
          if (subIndex < fullSubText.length) {
            setSubText((prev) => prev + fullSubText.charAt(subIndex));
            subIndex++;
          } else {
            clearInterval(subInterval);
          }
        }, 50);
      }
    }, 100);

    return () => {
      clearInterval(mainInterval);
    };
  }, []);

  return (
    <div className="typing-text">
      <h1 className={`main-text ${isFinished ? 'finished' : ''}`}>{text}</h1>
      {isFinished && (
        <p className="sub-text fade-in">
          {preIdeaText}
          <span className="special-text">{ideaText}</span>
          {postIdeaText}
          <span className="special-text">{realityText}</span>
          {endText}
        </p>
      )}
    </div>
  );
}

export default TypingText;
