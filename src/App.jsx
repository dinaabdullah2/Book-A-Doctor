
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AppoimtmentList from './pages/AppointmentList'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-appointment" element={<AppoimtmentList />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
