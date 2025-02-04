import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App';
import './src/variables.css';
import './src/globalStyles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
