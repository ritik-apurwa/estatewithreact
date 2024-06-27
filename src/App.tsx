import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Image from "./components/ui/Image";
import { demoImage } from "./data";

export default function App() {
  return (
    <section className=" ">
      <Image className="" height="200" alt="Home"   src={demoImage}   />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </section>
  );
}
