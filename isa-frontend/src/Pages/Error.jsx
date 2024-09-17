import { motion } from "framer-motion";

const Error = () => {
  return (
    <div
      className="bg-stone-50 p-4 max-w-screen-xl flex justify-center items-center mx-auto"
      style={{ height: "calc(100vh - 390px)" }}
    >
      <div className="">
        <motion.h1
          className="m-2 text-4xl font-bold font-outfit"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          404 Error
        </motion.h1>
      </div>
    </div>
  );
};

export default Error;
