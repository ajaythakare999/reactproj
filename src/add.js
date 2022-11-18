import React from "react";
import { Link } from "react-router-dom";
import './add.css'


function Add() {
    return (
      
       <>
       

            <Link className="link" to="/home">Admin </Link>
            <Link  className="link link2" to="/about">ShowData</Link>
          
      
       
       </>
    );
  }
  
  export default Add;
  