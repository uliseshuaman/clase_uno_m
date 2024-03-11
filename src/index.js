import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authentication from './pages/authentication/authentication';
import Database from './pages/database/database';
import MachineLearning from './pages/machine_learning/machine_learning';
import Others from './pages/othes/others';
import Functions from './pages/functions/functions';
import Storage from '@mui/icons-material/Storage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='authentication' element={<Authentication />} />   
        <Route path='database' element={<Database />} />
        <Route path='functions' element={<Functions />} />
        <Route path='machine-learning' element={<MachineLearning />} />
        <Route path='others' element={<Others />} />
        <Route path='storage' element={<Storage />} />     
      </Route>

    </Routes>
  </BrowserRouter>
);




