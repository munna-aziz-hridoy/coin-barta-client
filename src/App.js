import './App.css'
import Header from './pages/navbar/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Header />} /> */}
                <Route path="about" element={<Header />} />
                <Route path="admin" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
