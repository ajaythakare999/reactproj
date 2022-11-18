import React, { useState,createContext} from "react";
import App from "./App"
const show=createContext();









function Admin() {

   const [data,setData]=useState({
      habbit:"",
      caption:"",
      image:"",
      
   });
   
    return (
      
       <>
       <show.Provider value={data}>
         <App/>
       </show.Provider>
       

      

      type your habit <input type="text" onChange={(event)=>{

        // console.log(event.target.value);

        let  value=event.target.value;
        setData({...data, habbit:value});
       // console.log(data.habbit);

      }}></input>

      add your caption <input type="text" onChange={(event)=>{

         let  value=event.target.value;
         setData({...data, caption:value});
         //console.log(data.caption);

      }}></input>

      add img<input type="file" onChange={(event)=>{

            const   value=event.target.files[0];
           // console.log(value.name);
         
           setData({...data,image:value.name})

      }}></input>
      <button onClick={()=>{
         setData(data);
         
      }}>add</button>

      
     

     </>      
    );
  }
  
  export default Admin;
  export {show};
 
  
  