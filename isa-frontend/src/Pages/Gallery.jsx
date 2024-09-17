import GalleryCardSmall from "../components/GalleryCardSmall";
import { motion } from "framer-motion";
import { galleryData } from "../data/galleryData";

const Gallery = () => {
  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto">
      <div className="px-6 py-3">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Some of our joyous moments
        </motion.h1>
      </div>
      <div className="px-6 grid grid-cols-1 gap-10 md:grid-cols-3">
        {galleryData.map((data, i) => (
          <GalleryCardSmall
            key={i}
            title={data.title}
            src={data.src}
            date={data.date}
            organized_by={data.organized_by}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
