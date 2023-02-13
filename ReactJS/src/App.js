import { Routes, Route } from "react-router-dom"
import MasterLayout from "./Components/Layouts/MasterLayout";
import Home from "./Components/Pages/Home/Home";
import Add from "./Components/Pages/People/Add";
import List from "./Components/Pages/People/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout children={<Home />} />} />
        <Route path="/people" element={<MasterLayout children={<List />} />} />
        <Route path="/people/add" element={<MasterLayout children={<Add />} />} />
      </Routes>
    </>
  );
}

export default App;
