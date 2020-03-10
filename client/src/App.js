import React, { useState, useEffect }  from 'react';
import './App.css';
import api from './services/api/';

function App() {
  const [message, setMessage] = useState('Hello from client');
  useEffect(()=>{
    async function getMessage() {
      const response = await api.get('/');
      setMessage(response.data.message);
    }
    getMessage();
  }, []);
  return (
    <h1>{message}</h1>
  );
}

export default App;
