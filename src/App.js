import './App.css'
import Header from './pages/navbar/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import News from './pages/body/News'
import Tutorial from './pages/body/Tutorial'
import Contact from './pages/body/Contact'
import Footer from './pages/footer/Footer'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
