import './App.css'
import Header from './components/Navbar/Navbar'; //NavBar
import 'bootstrap/dist/css/bootstrap.min.css'; //React Bootstrap import bootstrap
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";//BrowserRouter
//import ItemCount from './components/ItemCount/Itemcount'; //Ejem de boton agregar al carrito
//import { Navbar } from 'react-bootstrap';

function App() {

  /*Nombre de la ruta/componente que se renderisa en la ruta*/
  return (

    <div className='App'>
      <BrowserRouter>
        <Header /> {/*NavBar*/}
        <Routes className='d-flex justify-content-between'>
          <Route path='/' element={<ItemListContainer />}></Route>
          {/* <Route path='/categoriasDeDispositivos/:categorias' element={<ItemListContainer />}></Route> */}
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          {/* <Route path='/category/:categoryId' element={<ItemListContainer />}></Route> */}
          <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route> {/*ItemDetailContainer esta en App por debajo del ItemListContainer*/}
          <Route path='*' element={<h1 className='text-center p-5'><bold>404 Not Found</bold></h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    /*<>
      <div>
        <Header />
        <ItemListContainer greeting="Bienvenidos" />
        <ItemDetailContainer />
        <ItemCount 
          initial={1}
          stock={10}
          onAdd={(quantity) => {
            console.log('Cantidad agregada', quantity)
          }} /> Funcion de agregar temporal
        <h3>Catalogo</h3>
      </div>
    </> */

  );
}

export default App
