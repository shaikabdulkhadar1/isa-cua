import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";

const Info = ({ title, bata }) => {
  // const [bata, setBata] = useState([]);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       let { data } = await axios.get("https://api.github.com/users");
  //       setUsers(data);
  //       // console.log(users);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getData();
  //   const fetchData = async () => {
  //     const { data } = await axios.get("http://localhost:5000/banking");
  //     // console.log(data);
  //     setBata(data);
  //     // console.log(bata);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      {console.log(bata)}
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        >
          {title}
        </motion.h1>
      </div>
      {!bata ? (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="p-10 py-3 font-poppins"
        >
          Loading...
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="p-10 py-3"
        >
          {bata.map((item) => (
            <div
              key={item.title}
              className="my-3 px-4 py-3 border border-gray-300 shadow-md rounded-lg "
            >
              <h1 className="font-poppins font-bold my-3">{item.title}</h1>
              <ul>
                {item.details.map((i) => (
                  <li
                    className="font-poppins text-sm mb-3 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                    key={i.subtitle}
                  >
                    {i.subtitle}
                    {i.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* <ul className="flex flex-row border-b border-gray-500">
            {bata.map((tab, index) => (
              <li key={index} className="font-poppins text-center ml-2">
                <button
                  className={`flex h-full items-center text-sm justify-center px-4 py-2 rounded-t-lg ${
                    index === activeTab
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul> */}

          {/* <div className="pt-3 px-3">
            {activeTab !== null && (
              <div className={`active`}>
                {bata[activeTab].details.map((p, i) => (
                  <p
                    key={i}
                    className="font-poppins text-sm mb-3 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {p.subtitle ? <b>{p.subtitle}: </b> : ""}
                    {p.text}
                  </p>
                ))}
              </div>
            )}
          </div> */}
        </motion.div>
      )}
    </div>
  );
};

export default Info;
