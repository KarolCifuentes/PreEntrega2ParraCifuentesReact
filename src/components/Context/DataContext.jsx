import { createContext, useState, useEffect} from "react";
import axios from "axios"; //Peticiones http

export const dataContext = createContext();

const DataProvider = ({ children }) => {
   //Creamos un estado y seteamos los productos
   const[data, setData] = useState ([]);//Hooks
   const[cart, setCart] = useState ([]); 

   //var data = undefined;

   //get a los obsejtos
   useEffect(()=>{
      axios("data.json").then((respuesta)=> setData(respuesta.data))//Url   
  },[])

   //console.log("Prueba")
   //console.log(data)

   //La informacion que voy a repartir en mi app, los hijos del Provider children
   return <dataContext.Provider value={{ data, cart, setCart }}>{children}</dataContext.Provider>   
}

export default DataProvider;
