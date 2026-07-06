import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// HashRouter is used so client-side routes (e.g. #/browse) work on static
// hosts like GitHub Pages, which don't rewrite unknown paths to index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
