import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import { Store } from "./pages/Store";
import {Navbar as Navbars} from './components/Navbar'
import {ShoppingCartProvider} from './context/ShoppingCartContext'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbars />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
