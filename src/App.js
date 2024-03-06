import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouters } from './Router';

function App() {
  return (
    <div>
      <RouterProvider router={appRouters} />
    </div>
  );
}

export default App;
