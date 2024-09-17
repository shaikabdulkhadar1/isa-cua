import Button from "./Button";

const EventCardExpanded = ({
  title,
  description,
  organised_by,
  date,
  time,
  venu,
  location,
  link,
}) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:scale-105">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          alt="ui/ux review check"
        />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <h5 className="block mb-3 font-poppins text-xl font-semibold">
          {title}
        </h5>
        <p className="block font-poppins line-clamp-5">{description}</p>
        <p className="block font-poppins text-xs mt-2">
          <strong>Organised by:</strong> {organised_by}
        </p>
        <div className="m-2 ml-0 font-poppins text-sm">
          <div className="flex p-1 pl-0">
            <svg
              class="feather feather-map-pin"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="pl-2">{venu}</p>
          </div>
          <div className="flex p-1 pl-0">
            <svg
              class="feather feather-calendar"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <p className="pl-2">{date}</p>
          </div>
          <div className="flex p-1 pl-0">
            <svg
              class="feather feather-clock"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="pl-2">{time}</p>
          </div>
          <div className="flex p-1 pl-0">
            <svg
              class="feather feather-map"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" x2="8" y1="2" y2="18" />
              <line x1="16" x2="16" y1="6" y2="22" />
            </svg>
            <a className="pl-2" href={location}>
              Google Map
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 text-center">
        <Button text="Reserver your spot" link={link} />
      </div>
    </div>
  );
};

export default EventCardExpanded;
