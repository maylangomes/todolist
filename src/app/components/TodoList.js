"use client";

import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoList = () => {
  const { state, dispatch } = useTodos();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = state.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const handleDeleteAll = () => {
    dispatch({ type: 'DELETE_ALL' });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl text-gray-800 font-bold mb-4 animate-fade-in">Rechercher une tâche</h2>
      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 animate-fade-in"
      />
      <ul className="space-y-4">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-4 border-b border-gray-300 bg-white rounded-lg">
              <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggleTodo(todo.id)}
                  className={`p-2 rounded-lg ${todo.completed ? 'bg-gray-500 text-white' : 'bg-indigo-500 text-white'} hover:bg-opacity-75`}
                >
                  {todo.completed ? 'Effectuée' : 'En cours'}
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500 animate-fade-in">Aucune tâche trouvée</li>
        )}
      </ul>
      {filteredTodos.length > 0 && (
        <button
          onClick={handleDeleteAll}
          className="mt-4 p-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
        >
          Supprimer toutes les tâches
        </button>
      )}
    </div>
  );
};

export default TodoList;
