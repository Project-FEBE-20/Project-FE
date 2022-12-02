import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Layout/Footer";
import Login from "./pages/Login/Login";
import Registrasi from "./pages/Registrasi/Registrasi";
import Artikel from "./pages/Artikel/Artikel";
import BuatArtikel from "./pages/BuatArtikel/BuatArtikel";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Registrasi />} />
        <Route path="/BuatArtikel" element={<BuatArtikel />} />
        <Route path="/Artikel" element={<Artikel />} />
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
