import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';


// window.store = store;

const container = document.getElementById('app');

const root = createRoot(container);
if (root) {
    root.render(
        <App />
    );
} else {
    console.error("Root container missing in mainhost bootstrap.js");
}