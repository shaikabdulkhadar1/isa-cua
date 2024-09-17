import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import { teamdata } from "../data/teamData";

const OurTeam = () => {
  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Our Team Makes Us Great
        </motion.h1>
      </div>
      <div className="px-6 grid grid-cols-1 gap-10 md:grid-cols-3">
        {teamdata.map((member, i) => (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
            className=""
            key={i}
          >
            <TeamCard
              // key={member.key}
              name={member.full_name}
              position={member.position}
              about={member.about}
              image={member.photo}
              social_media={member.social_media}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
