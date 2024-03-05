import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Docs from "./components/Docs";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        {/* <Route path="/" element="This Home"></Route> */}
        {/* <Route path="/about" element={<h1>About</h1>}></Route> */}

        <Route path="/" element={<MainHeader></MainHeader>}>
          {/* Default route  */}
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/docs" element={<Docs></Docs>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
