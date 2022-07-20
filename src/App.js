import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import News from './pages/body/News'
import Tutorial from './pages/body/Tutorial'
import Contact from './pages/body/Contact'
import Footer from './pages/footer/Footer'
import DashBoard from './pages/dashBoard/DashBoard'
import Title from './pages/navbar/Title'
import ManageAllNews from './pages/dashBoard/ManageAllNews'
import Category from './pages/dashBoard/Category'
import UserDash from './pages/dashBoard/UserDash'
import UpdateEmail from './pages/dashBoard/UpdateEmail'
import AddNews from './pages/dashBoard/AddNews'

function App() {
    return (
        <div>
            <Title />
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Login />} />
                <Route path="/manageAll" element={<ManageAllNews />} />
                <Route path="/dashBoard" element={<DashBoard />} />
                <Route path="/category" element={<Category />} />
                <Route path="/user" element={<UserDash />} />
                <Route path="/updateEmail" element={<UpdateEmail />} />
                <Route path="/addNews" element={<AddNews />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
