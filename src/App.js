import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Aboute from "./Components/Aboute";
import Home from "./Components/Home";
import Store from "./Components/Store";
import Navbar from "./Components/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";




const App = () => {
  return(
    <ShoppingCartProvider>
    <Navbar />
     <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<Aboute />} />
      
    </Routes>
  </Container>
  </ShoppingCartProvider>
    
  ) ;
};

export default App;
