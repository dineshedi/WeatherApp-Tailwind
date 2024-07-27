import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextHook from './Context/ContextHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextHook>
        <App />
  </ContextHook>

);
