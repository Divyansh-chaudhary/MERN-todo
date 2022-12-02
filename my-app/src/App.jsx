import React, { memo } from 'react';
import './App.css';
import TodoModule from './modules/TodoModule';

function App() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="p-5 max-w-4xl mx-auto  ">
        <TodoModule />
      </section>
    </main>
  );
}

export default memo(App);
