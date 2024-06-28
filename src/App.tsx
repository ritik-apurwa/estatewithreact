import { Routes, Route } from "react-router-dom";
import Navbar from "./AppComps/Navbar/Navbar";
import Footer from "./AppComps/Footer/Footer";
import Home from "./page/Home";

export default function App() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <div className="fixed w-screen mx-auto z-50 border-2  top-0 bg-background">
        <Navbar />
      </div>
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
