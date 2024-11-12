import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css'; // Keep this if you have global styles; otherwise, you can remove it
import App from './App'; // This imports the main application component

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <App />
);