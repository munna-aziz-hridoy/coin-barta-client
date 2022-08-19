import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import News from "./pages/body/News";
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
import SearchResult from "./components/SearchResult";
import CategoryNews from "./pages/body/CategoryNews";

import useGetUser from "./hooks/useGetUser";
import { useContext } from "react";
import { ServerUrlContext } from ".";

function App() {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useGetUser(serverUrl);
  console.log(serverUrl);

  return (
    <div>
      {user?.admin && (
        <div className="w-full flex justify-center items-center h-8 ">
          <h2 className="text-xl font-semibold text-gray-600">Admin</h2>
        </div>
      )}
      <Title />

      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/category-news/:category" element={<CategoryNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/searchResult/:searchValue" element={<SearchResult />} />
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
