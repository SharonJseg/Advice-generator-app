import React from 'react';
import ReactDOMCient from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const container = document.getElementById('root');
const root = ReactDOMCient.createRoot(container);

root.render(<App tab='home' />);
