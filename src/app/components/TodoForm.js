"use client";

import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  return (
    <div>
      <h2 className="text-xl text-gray-800 font-bold ml-4 animate-fade-in">Ajouter une tâche</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4 bg-white rounded-lg animate-fade-in">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ajouter une tâche"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="p-2 bg-indigo-500 text-white hover:text-gray-300 rounded-lg transition-transform transform font-bold">
          Ajouter
        </button>
      </form>
    </div>
  );  
};

export default TodoForm;
