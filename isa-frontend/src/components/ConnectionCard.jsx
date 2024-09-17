const ConnectionCard = ({ name, username, logo, link }) => {
  return (
    <div className="w-full h-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow just hover:scale-105">
      <div className="flex flex-col items-center m-8">
        <div>{logo}</div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 font-outfit">
          {name}
        </h5>
        <span className="text-sm text-gray-500 font-poppins text-center">
          {username}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 text-sm font-poppins font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
