import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
