import React from 'react';
import ToDoList from './components/ToDoList';
import BottomBar from './components/BottomBar';
import Header from './components/Header';
import './style.css';

export default function App() {
  return (
    <div className="autocomplete">
      <div className="wrapper">
        <Header />
        <ToDoList />
        <BottomBar />
      </div>
    </div>
  );
}
