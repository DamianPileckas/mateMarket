import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
import './App.css'
import ItemCount from './components/itemCount/ItemCount.jsx'
 
function App() {


  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!"></ItemListContainer>
      <ItemCount></ItemCount>
    </>
  )
}

export default App
