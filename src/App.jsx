import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
import './App.css'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!"></ItemListContainer>
    </>
  )
}

export default App
