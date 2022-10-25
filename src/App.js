import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Courses />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
