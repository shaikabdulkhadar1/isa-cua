import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Events from "./Pages/Events";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Resources from "./Pages/Resources";
import Footer from "./components/Footer";
import Gallery from "./Pages/Gallery";
import Info from "./components/Info";
import Error from "./Pages/Error";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [bata, setBata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://isa-cua.vercel.app/banking");
      // console.log(data);
      setBata(data);
      // console.log(bata);
    };

    fetchData();
  }, []);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:5000/banking");
  //     setData(response.data);
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/resources/prearrival"
          element={<Info bata={bata} title={"Pre-Arrival Information"} />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
