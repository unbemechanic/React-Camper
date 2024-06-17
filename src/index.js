import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesComponent from './routes';
import Navbar from './page/navbar/navbar';
import Footer from './page/footer/footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RoutesComponent />
    <Footer/>
  </React.StrictMode>
);
