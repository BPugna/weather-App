import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { About } from './Components/About';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
