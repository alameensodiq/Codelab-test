import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import {Route, Routes, BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={configureStore}>
    <BrowserRouter>
    <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              fontSize: "16px",
              marginTop: "14px",
              color: "white",
              background: "#3fb172",
              padding: "10px",
            },
          },
          error: {
            style: {
              fontSize: "16px",
              marginTop: "14px",
              color: "white",
              background: "#ff0000",
              padding: "10px",
            },
          },
        }}
      />
    <Routes>
      <Route>
       <Route path='/' element={<App />} />
      </Route>
    </Routes>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
