const GalleryCardSmall = ({ src, title, date, organized_by }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:scale-105">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img src={src} alt="" />
      </div>
      <div className="p-6">
        <h5 className="block mb-3 font-poppins text-xl font-semibold">
          {title}
        </h5>
        <p className="block font-poppins text-xs mt-2">
          <strong>Date:</strong> {date}
        </p>
        <p className="block font-poppins text-xs">
          <strong>Organised by:</strong> {organized_by}
        </p>
      </div>
    </div>
  );
};

export default GalleryCardSmall;
