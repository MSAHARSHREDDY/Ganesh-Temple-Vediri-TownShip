import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "../components/layout/Layout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Deities from "../pages/Deities";
import Sevas from "../pages/Sevas";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import TempleInfo from "../pages/TempleInfo";
import Donors from "../pages/Donors";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/deities" element={<Layout><Deities /></Layout>} />
        <Route path="/sevas" element={<Layout><Sevas /></Layout>} />
        <Route path="/donors" element={<Layout><Donors /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/info/:type" element={<Layout><TempleInfo /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}