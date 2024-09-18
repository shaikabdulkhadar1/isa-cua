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
  const [housingData, setHousingData] = useState([]);
  const [prearrival, setPrearrival] = useState([]);
  const [postarrival, setPostarrival] = useState([]);
  const [travel, setTravel] = useState([]);
  const [handBook, sethandBook] = useState([]);
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://isa-cua-backend.vercel.app/studenthandbook"
      );
      const { data } = await axios.get(
        "https://isa-cua-backend.vercel.app/banking"
      );
      const res2 = await axios.get(
        "https://isa-cua-backend.vercel.app/prearrival"
      );
      const res3 = await axios.get(
        "https://isa-cua-backend.vercel.app/postarrival"
      );
      const res1 = await axios.get(
        "https://isa-cua-backend.vercel.app/housing"
      );
      const res4 = await axios.get("https://isa-cua-backend.vercel.app/travel");
      const res5 = await axios.get("https://isa-cua-backend.vercel.app/faqs");
      setFaqs(res5.data);
      sethandBook(res.data);
      setPrearrival(res2.data);
      setPostarrival(res3.data);
      setHousingData(res1.data);
      setTravel(res4.data);
      setBata(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-stone-50">
      {console.log(travel)}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/resources/studenthandbook"
          element={<Info bata={handBook} title={"Student Hand Book"} />}
        />
        <Route
          path="/resources/prearrival"
          element={<Info bata={prearrival} title={"Pre-Arrival Information"} />}
        />
        <Route
          path="/resources/postarrival"
          element={
            <Info bata={postarrival} title={"Post-Arrival Information"} />
          }
        />
        <Route
          path="/resources/travel"
          element={<Info bata={travel} title={"Pre-Arrival Information"} />}
        />
        <Route
          path="/resources/housing"
          element={<Info bata={housingData} title={"Housing Information"} />}
        />
        <Route
          path="/resources/banking"
          element={<Info bata={bata} title={"Banking Guide"} />}
        />
        <Route
          path="/resources/faqs"
          element={<Info bata={faqs} title={"Frequently Asked Questions"} />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
