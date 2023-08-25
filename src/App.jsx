import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopHome } from './pages/ShopHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShopHome />} />
        <Route path='/about' element={<p>Soy el about</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
