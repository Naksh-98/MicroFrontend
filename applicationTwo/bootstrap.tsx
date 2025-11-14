import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/app/store';
import App from './App';

// const store = window.store;

const containerRoot = document.getElementById('app')

if (containerRoot) {
    const root = createRoot(containerRoot);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
} else {
    console.log("lol");
}

