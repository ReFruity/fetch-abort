import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { worker } from "./api/server";

async function start() {
  await worker.start({ onUnhandledRequest: 'bypass' })

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

start().catch(console.error)
