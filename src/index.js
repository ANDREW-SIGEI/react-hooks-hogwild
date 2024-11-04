import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'; // Ensure Semantic UI CSS is imported
import './index.css'; // Your custom styles (if any)
import reportWebVitals from './reportWebVitals'; // Optional for performance measuring

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: If you want to measure performance in your app
reportWebVitals();
