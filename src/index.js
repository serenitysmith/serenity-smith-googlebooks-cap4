import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

// Import the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals(console.log);
