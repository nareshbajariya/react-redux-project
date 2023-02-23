import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { Store } from './app/store';
import App from './App';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);


