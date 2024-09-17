import Button from "./Button";

const ResourcesCard = ({ title, link, icon }) => {
  return (
    <div class="w-64 h-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow just hover:scale-105">
      <div class="flex flex-col items-center m-8">
        <div className="mb-10">{icon}</div>
        <h5 class="mb-1 text-xl font-medium text-gray-900 font-outfit text-center">
          {title}
        </h5>
        <div class="flex mt-4 md:mt-6">
          <Button link={link} text={"More Info"} />
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
