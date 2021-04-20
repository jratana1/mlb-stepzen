import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const { REACT_APP_STEPZEN_API_KEY, REACT_APP_STEPZEN_URI } = process.env;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Apikey ${REACT_APP_STEPZEN_API_KEY}`,
  },
  uri: REACT_APP_STEPZEN_URI
});

const store = createStore(rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


