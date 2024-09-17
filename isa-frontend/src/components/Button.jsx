import { useNavigate } from "react-router-dom";

const Button = ({ text, link, svgIcon = "" }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(link);
  };

  return (
    <div>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-light font-poppins rounded-lg text-md px-5 py-2.5 me-2 mb-2 drop-shadow-xl"
        onClick={handleButton}
      >
        <div className="flex flex-row">
          {text}
          {svgIcon}
        </div>
      </button>
    </div>
  );
};

export default Button;
