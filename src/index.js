import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Handle client-side routing for GitHub Pages
const pathSegmentsToKeep = 1;
const l = window.location;
if (l.search[1] === '/') {
  const decoded = l.search.slice(1).split('&').map(function(s) {
    return s.replace(/~and~/g, '&')
  }).join('?');
  window.history.replaceState(null, null,
    l.pathname.slice(0, -pathSegmentsToKeep) + decoded + l.hash
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
