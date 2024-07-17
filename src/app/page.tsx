'use client'


import {TodoProvider} from '../app/context/TodoContext';
import TodoForm from '../app/components/TodoForm';
import TodoList from '../app/components/TodoList';

const Home = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <h1 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-seedextSaumon to-seedextBlue animate-fade-in">
          Todo <span className="text-8xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-seedextSaumon to-seedextBlue animate-fade-in">List</span>
        </h1>
        <div className="bg-white p-8 rounded-3xl w-full max-w-lg">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default Home;
