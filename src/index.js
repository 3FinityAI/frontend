import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix the import to match the actual filename case
import App from './app/app';

// Create a simple theme wrapper directly in index.js
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './app/public/styles/global.css'; 

// Create a basic theme
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);