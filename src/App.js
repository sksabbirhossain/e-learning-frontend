import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Courses from "./pages/Courses/Courses";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/category/:id" element={ <Details/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
