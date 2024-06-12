import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesComponent from './routes';
import Navbar from './page/navbar/navbar';
import Footer from './page/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RoutesComponent />
    <Footer/>
  </React.StrictMode>
);
