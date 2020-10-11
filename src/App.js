import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <h1>LETS BUILD A DISCORD CLONE</h1>

    <Sidebar />

    <Chat />

    </div>
  );
}

export default App;
