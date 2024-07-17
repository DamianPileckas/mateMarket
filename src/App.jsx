import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      

      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
