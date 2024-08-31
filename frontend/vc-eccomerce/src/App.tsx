import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
        
    </>
  )
}

export default App
