import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
import './App.css'
import ItemCount from './components/itemCount/ItemCount.jsx'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx'
function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
