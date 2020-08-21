import React, { useState } from 'react';

import Select from '../Select';
import categories from '../../utils/categories';

import './styles.css';

function Form({ fetchData }) {
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState('any');

  return (
    <div className="container">
      <form
        onSubmit={e => fetchData(e, category, difficulty)}
        className="form"
      >
        <Select
          name="category"
          label="Category"
          value={category}
          onChange={e => {
            setCategory(Number(e.target.value));
          }}
          optionLabel="Select a Category"
          options={categories}
        />

        <Select
          name="difficulty"
          label="Difficulty"
          value={difficulty}
          onChange={e => {
            setDifficulty(e.target.value);
          }}
          optionLabel="Select a Difficulty"
          options={[
            { value: 'any', label: 'Any Difficulty' },
            { value: 'easy', label: 'Easy' },
            { value: 'medium', label: 'Medium' },
            { value: 'hard', label: 'Hard' },
          ]}
        />

        <button className="start-btn" type="submit">
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default Form;
