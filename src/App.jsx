import { useState } from 'react';
import './App.css';

const App = ({ tags }) => {
  const [tagData, setTagData] = useState(tags);
  const removeTagData = (indexToRemove) => {
    setTagData(tagData.filter((_, index) => index !== indexToRemove));
  };
  const addTagData = (event) => {
    setTagData([...tagData, event.target.value]);
    event.target.value = '';
  };
  return (
    <div className='tag-input'>
      <ul className='tags'>
        {tagData.map((tag, index) => (
          <li key={index} className='tag'>
            <span className='tag-title'> {tag} </span>
            <span
              className='tag-close-icon'
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type='text'
        onKeyUp={(event) => (event.key === 'Enter' ? addTagData(event) : null)}
        placeholder='Press enter to add a tag'
      />
    </div>
  );
};

export default App;
