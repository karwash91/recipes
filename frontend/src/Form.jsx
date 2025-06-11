import { useAuth } from 'react-oidc-context';
import React, { useState } from 'react';

function SubmitForm() {
  const [form, setForm] = useState({
    title: '',
    ingredients: ''
  });

  const auth = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.name,
      ingredients: form.ingredients,
    };

    try {
      const res = await fetch('https://6dcafcvjfb.execute-api.us-east-1.amazonaws.com/prod/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Failed to submit: ${res.status}`);
      }

      alert('Recipe submitted successfully!');
      setForm({ name: '', ingredients: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  return (
    <div className="App">
      <h1>Submit a New Recipe</h1>
      <p> Hello, {auth.user?.profile.name} </p>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" type="text" autoComplete="on" placeholder="Recipe title" onChange={handleChange} required />
          <textarea name="ingredients" placeholder="Ingredients (comma or newline separated)" onChange={handleChange} required />
          <button type="submit">Submit</button>
          <button onClick={() => auth.removeUser()}>Sign out</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitForm;