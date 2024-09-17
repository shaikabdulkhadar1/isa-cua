import Button from "./Button";

const EventCardSmall = ({
  title,
  description,
  organised_by,
  date,
  time,
  venu,
}) => {
  return (
    <a
      href="/events"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:scale-105"
    >
      <img
        className="object-cover w-full m-2 ml-4 rounded-lg h-96 md:h-auto md:w-48"
        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal font-poppins">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-sm line-clamp-2 text-gray-700">
          {description}
        </p>
        <p className="font-normal mt-1 text-xs text-gray-700 line-clamp-1">
          organised by: {organised_by}
        </p>
        <p className="font-normal text-xs text-gray-700">
          When: {date} @ {time}
        </p>
        <p className="font-normal text-xs text-gray-700">Where: {venu}</p>
        <div className="h-12 mt-2">
          <Button text={"Register Now"} link="/events" />
        </div>
      </div>
    </a>
  );
};

export default EventCardSmall;
