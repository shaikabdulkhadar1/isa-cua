import { motion } from "framer-motion";
import aboutUs from "../assets/about-us.jpg";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          About Us
        </motion.h1>
      </div>
      <div className="px-6 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
          className="w-full"
        >
          <img src={aboutUs} className="h-auto rounded-xl drop-shadow-2xl" />
        </motion.div>
        <div className="w-full justify-center align-center text-center text-sm mt-16 md:ml-6 font-poppins">
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
          >
            The Indian Student Association (ISA) is one of the many dynamic
            student organizations at the Catholic University of America (CUA),
            dedicated to celebrating Indian culture and fostering inclusivity.
            ISA offers a window into India's rich traditions through diverse
            events, from vibrant festivals like Holi, and Ramadan to the
            spiritually significant Diwali. Beyond cultural celebrations, ISA
            serves as a close-knit community, providing opportunities for social
            bonding and networking. Members form lasting friendships, creating a
            supportive network, especially for international students. ISA also
            emphasizes academic success and career development.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
          >
            Additionally, the association is committed to community service,
            engaging in projects that make a positive impact locally and
            globally. ISA's inclusive ethos ensures that all students,
            regardless of background, feel valued and welcomed. It stands as a
            testament to the power of cultural exchange, social connection, and
            community engagement within the academic life at the CUA.
          </motion.p>{" "}
          <br />
          <motion.div
            className=""
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.65 }}
          >
            <Button text="Connect with us" link="/contact" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
