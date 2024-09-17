const ResourcesCard = ({ title, link, icon }) => {
  return (
    <div class="w-64 h-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow just hover:scale-105">
      <div class="flex flex-col items-center m-8">
        <div className="mb-10">{icon}</div>
        <h5 class="mb-1 text-xl font-medium text-gray-900 font-outfit text-center">
          {title}
        </h5>
        <div class="flex mt-4 md:mt-6">
          <a
            href={link}
            class="inline-flex items-center px-4 py-2 text-sm font-poppins font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
