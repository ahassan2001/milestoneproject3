import React from 'react';

const RecipeForm = ({ onSubmit, onChange, values }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={onChange}
        placeholder="Recipe title"
      />
      <textarea
        name="description"
        value={values.description}
        onChange={onChange}
        placeholder="Recipe description"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;