import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/App';
import './src/styles/variables.css';
import './src//styles/globalStyles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
