import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Blogs from "./pages/Blogs/Blogs";
import Checkout from "./pages/Ckeckout/Checkout";
import Courses from "./pages/Courses/Courses";
import Details from "./pages/Details/Details";
import Error from "./pages/Error/Error";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/category/:id" element={<Details />} />
          <Route
            path="/checkout/:id"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
