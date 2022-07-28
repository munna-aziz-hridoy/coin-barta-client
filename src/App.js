import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import News from "./pages/body/News";
import Tutorial from "./pages/body/Tutorial";
import Contact from "./pages/body/Contact";
import Footer from "./pages/footer/Footer";
import DashBoard from "./pages/dashBoard/DashBoard";
import Title from "./pages/navbar/Title";
import ManageAllNews from "./pages/dashBoard/ManageAllNews";
import Category from "./pages/dashBoard/Category";
import UserDash from "./pages/dashBoard/UserDash";
import UpdateEmail from "./pages/dashBoard/UpdateEmail";
import AddNews from "./pages/dashBoard/AddNews";
import ProtectedRoute from "./components/ProtectedRoute";
import NewsDetails from "./components/NewsDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateNews from "./pages/dashBoard/UpdateNews";
import CategoryNews from "./pages/body/CategoryNews";

function App() {
  return (
    <div>
      <Title />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="category/:category" element={<CategoryNews />} />

        <Route path="/news/:id" element={<NewsDetails />} />

        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/update-news/:id" element={<UpdateNews />} />
        <Route
          path="/manageAll"
          element={
            <ProtectedRoute>
              <ManageAllNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashBoard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserDash />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateEmail"
          element={
            <ProtectedRoute>
              <UpdateEmail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addNews"
          element={
            <ProtectedRoute>
              <AddNews />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
