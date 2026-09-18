
import { Routes,Route } from "react-router-dom";
import MenuPage from "./pages/Menupage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App(){
  return(
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<MenuPage />} />

      </Routes>
     <Footer/>
     </>
  );
}

export default App;
