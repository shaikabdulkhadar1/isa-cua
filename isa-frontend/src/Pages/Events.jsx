import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { eventsData } from "../data/eventsData";
import EventCardExpanded from "../components/EventCardExpanded";

const Events = () => {
  const [liveEvents, setLiveEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = eventsData.filter((item) => item.live == true);
    setLiveEvents(filteredEvents);
    const pastEvents = eventsData.filter((item) => item.live == false);
    setPastEvents(pastEvents);
  }, [eventsData]);

  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Upcoming Events
        </motion.h1>
        {liveEvents.length > 0 ? (
          liveEvents.map((event) => (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
                className=""
              >
                <EventCardExpanded
                  title={event.title}
                  description={event.description}
                  organised_by={event.organised_by}
                  date={event.date}
                  time={event.time}
                  venu={event.venu}
                  location={event.location}
                  link={event.link}
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
            className="mx-auto mt-10 ml-2 flex font-poppins"
          >
            No upcoming events
          </motion.div>
        )}
      </div>
      <div className="px-6 py-3 pt-12">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Past Events
        </motion.h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 pt-4">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, i) => (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
                className=""
                key={i}
              >
                <EventCardExpanded
                  title={event.title}
                  description={event.description}
                  organised_by={event.organised_by}
                  date={event.date}
                  time={event.time}
                  venu={event.venu}
                  location={event.location}
                  link={event.link}
                />
              </motion.div>
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
              No past events
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
