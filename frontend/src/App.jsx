import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    ingredients: '',
    steps: '',
    author: '',
    tags: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Recipe submitted!\n\n' + JSON.stringify(form, null, 2));
    // In a later step, this will send the data to the API Gateway endpoint
  };

  return (
    <div className="App">
      <h1>Submit a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" autoComplete="on" placeholder="Recipe name" onChange={handleChange} required />
        <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} required />
        <textarea name="steps" placeholder="Steps" onChange={handleChange} required />
        <input name="author" type="text" placeholder="Author" onChange={handleChange} required />
        <input name="tags" type="text" placeholder="Tags" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;