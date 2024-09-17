import { motion } from "framer-motion";
import { resourcesData } from "../data/resourcesData";
import ResourcesCard from "../components/ResourcesCard";

const Resources = () => {
  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Useful Resources
        </motion.h1>
      </div>
      <div className="px-6 grid grid-cols-1 gap-10 md:grid-cols-4">
        {resourcesData.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.3 }}
            className=""
            key={i}
          >
            <ResourcesCard
              title={item.title}
              link={item.link}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
