import React, { Component } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 import GenralPage from './genralPage';
import './styles.css'
import ContactPage from "./contactPage";
export class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<GenralPage  />} />
         <Route  path="/genral" element={<GenralPage  />} />
         <Route  path="/contacts" element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
