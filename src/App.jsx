

import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ContactUs />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;

