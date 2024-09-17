import { motion } from "framer-motion";
import Button from "../components/Button";
import { TypeAnimation } from "react-type-animation";
import man from "../assets/flag-man.png";
import { missionIcons } from "../data/missionIcons";
import { eventsData } from "../data/eventsData";
import { useEffect, useState } from "react";
import EventCardSmall from "../components/EventCardSmall";
import { benefitsData } from "../data/benefitsData";
import CUAmap from "../components/CUAmap";

const Hero = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = eventsData.filter((item) => item.live == true);
    setEvents(filteredEvents);
  }, [eventsData]);

  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      <div className="bg-stone-50 flex flex-col md:flex-row justify-between p-4 pt-2 relative h-full w-full">
        <div className="max-w-screen-xl p-4 font-outfit flex flex-col justify-center w-full md:w-1/2 ml-8">
          <div className="mb-2 p-4">
            <motion.h1
              className=""
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  "Welcome",
                  1000,
                  "स्वागत है",
                  1000,
                  "స్వాగతం",
                  1000,
                  "خوش آمدید",
                  1000,
                  "स्वागत आहे",
                  1000,
                  "સ્વાગત છે",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                className="text-7xl font-bold bg-gradient-to-b from-orange-400 to-green-400 text-transparent bg-clip-text"
                repeat={Infinity}
                // cursor={false}
              />
            </motion.h1>
          </div>
          <div>
            <motion.h2
              className="m-2 mt-4 text-5xl font-outfit"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.65 }}
            >
              Indian Students' Association @ CUA
            </motion.h2>
            <motion.p
              className="m-2 mt-4 text-md font-poppins"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
            >
              More than a club, it's a cultural journey. Join us as we celebrate
              India's heritage and create lifelong connections.
            </motion.p>
            <motion.div
              className="m-2 mt-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1.65 }}
            >
              <Button
                text="About Us"
                link="/about"
                svgIcon={
                  <svg
                    className="feather feather-arrow-right ml-2"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="5" x2="19" y1="12" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                }
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.65 }}
          className="p-2 mr-24 justify-center mt-8"
        >
          <img className="h-27rem" src={man} />
        </motion.div>
      </div>
      <div className="mx-auto p-4 bg-stone-50 w-full flex justify-center ">
        <div className="mt-4 ml-8 p-4 flex flex-col justify-center">
          <motion.h1
            className="m-2 text-4xl font-bold font-outfit text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
          >
            Our Mission
          </motion.h1>
          <motion.p
            className="m-2 font-poppins text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.0 }}
          >
            Our mission is to foster a vibrant Indian cultural community within
            the CUA community. By organizing engaging events, we aim to share
            the rich tapestry of Indian heritage and traditions. We warmly
            welcome everyone to participate in our events and become part of our
            growing family. Our goal is to create a platform that celebrates
            Indian culture and builds lasting connections.
          </motion.p>
          <motion.div
            className="m-2 flex justify-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.65 }}
          >
            <Button text="Read More" link="/ourteam" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.4 }}
            className="p-2 mr-24 flex flex-row justify-between justify-center mt-10"
          >
            {missionIcons.map((element, i) => (
              <div className="text-center m-auto" key={i}>
                {element.icon}
                <p className="font-poppins">{element.text}</p>
                <p className="font-poppins">{element.number}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mx-auto p-4 bg-stone-50 w-full flex justify-center ">
        <div className="mt-20 ml-8 p-4 flex flex-col justify-center">
          <motion.h1
            className="m-2 text-4xl font-bold font-outfit text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
          >
            Upcoming Events
          </motion.h1>
          {events.length > 0 ? (
            events.map((event, i) => (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.3,
                  }}
                  className=""
                  key={i}
                >
                  <EventCardSmall
                    title={event.title}
                    description={event.description}
                    organised_by={event.organised_by}
                    date={event.date}
                    time={event.time}
                    venu={event.venu}
                  />
                </motion.div>
              </div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="mx-auto mt-10 flex font-poppins"
            >
              No upcoming events
            </motion.div>
          )}
        </div>{" "}
      </div>
      <div className="mx-auto p-4 bg-stone-50 w-full flex justify-center ">
        <div className="mt-16 ml-8 p-4 flex flex-col justify-center">
          <motion.h1
            className="m-2 text-4xl font-bold font-outfit text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
          >
            Benefits of being a member
          </motion.h1>
          <motion.p
            className="m-2 font-poppins text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.0 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            maiores ab non mollitia quisquam provident, similique nobis porro
            doloribus quae dolorum, aut optio cupiditate deserunt. Id, amet
            veniam tempora fugit possimus in suscipit voluptates! Ratione
            voluptatibus cupiditate animi itaque ullam! Id in totam qui maxime
            quasi ipsam adipisci excepturi sint quam voluptatum rerum, tempora
            voluptas sapiente debitis itaque reiciendis nisi aliquid asperiores
            architecto sed culpa, est optio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.4 }}
            className="p-2 mr-24 flex flex-row justify-between justify-center mt-10"
          >
            {benefitsData.map((element, i) => (
              <div className="text-center m-auto" key={i}>
                {element.icon}
                <p className="font-poppins">{element.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-stone-50 flex flex-col md:flex-row justify-between mx-auto p-4 bg-stone-50 w-full flex justify-center">
        <div className="max-w-screen-xl p-4 font-outfit flex flex-col justify-center w-full md:w-1/2 ml-8">
          <motion.h1
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            className="text-3xl font-bold font-poppins mt-20"
          >
            Contact Details
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.65 }}
            className="m-auto ml-0"
          >
            <p className="m-4 ml-0">
              <strong>Email:</strong> cua.isa2023@gmail.com
            </p>
            <p className="m-4 ml-0">
              <strong>Address:</strong> 620 Michigan Ave NE, Washington, DC
              20064
            </p>
            <Button text={"Contact us"} link={"/contact"} />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
          className="p-2 justify-center mt-8 position-relative"
        >
          <CUAmap />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
