import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Or, as an option:
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
