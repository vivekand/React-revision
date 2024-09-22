import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcom to dummy page</h1>
      </header>

      <main>
        <h2>Fill the form below:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Dummy Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
