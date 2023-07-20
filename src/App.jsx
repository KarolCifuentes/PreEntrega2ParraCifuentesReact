import Home from './components/Home/Home';
import Header from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // React Bootstrap import bootstrap
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";//BrowserRouter
import DataProvider from './components/Context/DataContext';
import CartContent from './components/CartContent/CartContent';

function App() {

  /*Nombre de la ruta/componente que se renderisa en la ruta*/
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>

    /* <>
    <div>
      <Header />
      <ItemListContainer texto="Mensaje" />
      <h3>Catalogo</h3>
    </div>
    </> */

  )
}

export default App
