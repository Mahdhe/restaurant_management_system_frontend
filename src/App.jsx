

import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<ContactUs />} />
      
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

