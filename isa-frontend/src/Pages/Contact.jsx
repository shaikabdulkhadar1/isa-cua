import { motion } from "framer-motion";
import ConnectionCard from "../components/ConnectionCard";
import { connectionsData } from "../data/connectionsData";

const Contact = () => {
  return (
    <div className="bg-stone-50 p-4 mx-auto h-full max-w-screen-xl">
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Connect With Us
        </motion.h1>
      </div>
      <div className="px-6 grid grid-cols-1 gap-10 md:grid-cols-4">
        {connectionsData.map((connection, i) => (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
            className=""
            key={i}
          >
            <ConnectionCard
              name={connection.name}
              username={connection.username}
              link={connection.link}
              logo={connection.logo}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
