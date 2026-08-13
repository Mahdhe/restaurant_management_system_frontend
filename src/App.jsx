
import { Routes,Route } from "react-router-dom";
import Trackorder from "./pages/Trackorder";

function App(){
  return(
   
    <Routes>
      <Route path="/" element={<Trackorder />} />
      </Routes>
     
  );
}

export default App;
