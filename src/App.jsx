
import { Routes,Route } from "react-router-dom";
import MenuPage from "./pages/Menupage";

function App(){
  return(
   
    <Routes>
      <Route path="/" element={<MenuPage />} />

      </Routes>
     
  );
}

export default App;
