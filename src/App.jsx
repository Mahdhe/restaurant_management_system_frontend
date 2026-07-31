import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-[#0B1220]" /> {/* placeholder for page content */}
      <Footer />
    </>
  );
}

export default App;