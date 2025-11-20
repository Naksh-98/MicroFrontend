import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import store from './src/app/hostStore.js';
import { Provider } from 'react-redux';


// window.store = store;

const container = document.getElementById('app');

const root = createRoot(container);
if (root) {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
} else {
    console.error("Root container missing in mainhost bootstrap.js");
}