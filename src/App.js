import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";


import Admin from "./admin";
import Datashow from "./datashow";
import Add from "./add"


function App() {

  

  
  return (
    
     <>

     
     
 
    
     <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Add/>} /> 
        <Route exact path="/home" element={<Admin/>} /> 
      




        <Route  path="/about" element={<Datashow/>} />
        
        
             
      </Routes>
    </BrowserRouter>
    
    
              
      
   
    
     
     </>
  );
}

export default App;
