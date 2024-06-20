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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MotorComponent from './page/motor/motor';
import DocumentsComponent from './page/motor/documents';
import SignComponent from './page/sign';
import CaravanComponent from './page/caravan/caravan';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <SignComponent/>
    <Routes>
      <Route path='/motor' element={<MotorComponent/>}/>
      <Route path="/motor/:id" element={<DocumentsComponent/>} />
      <Route path="/caravan" element={<CaravanComponent/>} />
      <Route path='/sign' element={<SignComponent/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
