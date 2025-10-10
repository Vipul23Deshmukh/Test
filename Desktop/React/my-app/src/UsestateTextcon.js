import React, { useState } from 'react';

function TextCaseConverter() {
  const [text, setText] = useState('');
  const [caseType, setCaseType] = useState('uppercase');

  const convertText = () => {
    if (caseType === 'uppercase') {
      return text.toUpperCase();
    } else if (caseType === 'lowercase') {
      return text.toLowerCase();
    } else if (caseType === 'titlecase') {
      return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return text;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Text Converter</h2>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '5px', width: '300px' }}
      />

      <div style={{ marginTop: '10px' }}>
        <label>
          <input
            type="radio"
            value="uppercase"
            checked={caseType === 'uppercase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Uppercase
        </label>

        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="lowercase"
            checked={caseType === 'lowercase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Lowercase
        </label>

        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="titlecase"
            checked={caseType === 'titlecase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Title Case
        </label>
      </div>

      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Output: {convertText()}
      </div>
    </div>
  );
}

export default TextCaseConverter;
