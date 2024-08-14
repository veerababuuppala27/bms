import { useStore } from "@/hooks/useStore";
import EventCard from "../components/EventCard";
import { useQuery } from "@tanstack/react-query";
import Calendar from "react-calendar";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import axios from "@/utils/middleware";

function Filter() {
  const {
    root: { event },
  } = useStore();
  const fetchEvents = async () => {
    await event.fetchEvents();
  };

  const [filters, setFilters] = useState<any>({
    day: {
      Today: false,
      Tomorrow: false,
      ThisWeek: false,
      ThisMonth: false,
    },
    pricing: {
      Free: false,
      Paid: false,
    },
  });
  const [dayResult, setDayResult] = useState<any[]>([]);
  const handleFilterChange = (
    category: string,
    option: string,
    isChecked: boolean
  ) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [option]: isChecked,
      },
    }));
  };

  const fetchData = async () => {
    const selectedDays = [];
    if (filters.day.Today) selectedDays.push("Today");
    if (filters.day.Tomorrow) selectedDays.push("Tomorrow");
    if (filters.day.ThisWeek) selectedDays.push("ThisWeek");
    if (filters.day.ThisMonth) selectedDays.push("ThisMonth");

    const dayParam =
      selectedDays.length > 0 ? `day=${selectedDays.join("&day=")}` : "";

    const pricingParam = [];
    if (filters.pricing.free) pricingParam.push("free");
    if (filters.pricing.paid) pricingParam.push("paid");

    const pricingQuery =
      pricingParam.length > 0
        ? `pricing=${pricingParam.join("&pricing=")}`
        : "";

    try {
      const response = await axios.get(
        `https://kafsbackend-106f.onrender.com/api/v1/events/fetch?city=Dublin${
          dayParam ? `&${dayParam}` : ""
        }${pricingQuery ? `&${pricingQuery}` : ""}`
      );

      setDayResult(response.data.data.liveEvents);
    } catch (error) {
      console.log("Error while fetching", error);
    }
  };

  // Fetch data when filters change
  useEffect(() => {
    fetchData();
  }, [filters]);

  const { data: _ } = useQuery({
    queryKey: ["filterEvents"],
    queryFn: fetchEvents,
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const toggleCalendar = () => setCalendarOpen((p) => !p);

  return (
    <div className="lg:pr-[5%] xl:pr-[7%] pr-[0vw] flex md:gap-2 2xl:gap-10 flex-col sm:flex-row text-lg">
      {/* <div className="bg-red-400 min-h-4 min-w-4 p-24 rounded-full absolute"></div> */}
      <div className="z-10 md:w-[25rem] w-[100vw] flex flex-col mt-[50px] pt-[40px] h-[1005] rounded-r-xl backdrop-blur-2xl ml-1 pl-2 bg-white/10 border-r border-t border-b border-white/20 shadow-lg">
        {" "}
        {/* Fixed positioning and overflow */}
        <div className="border-gray-400 border-b mb-[30px] pl-[30px]">
          <h2 className="text-xl font-medium mt-[10px] mb-[20px]">
            Filter By:
          </h2>
        </div>
        <div className="border-gray-400 border-b space-y-3 mb-[50px] pl-[30px]">
          <p className="flex items-center w-full gap-2 mb-[20px] relative">
            <h3 className="font-medium text-xl">Day</h3>
            <CalendarIcon className="size-5" onClick={toggleCalendar} />
          </p>
          {calendarOpen && (
            <Calendar className="absolute !w-[100vw] md:!w-[25vw] 2xl:text-xl" />
          )}
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                checked={filters.day.Today}
                onChange={(e) =>
                  handleFilterChange("day", "Today", e.target.checked)
                }
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Today</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                checked={filters.day.Tomorrow}
                onChange={(e) =>
                  handleFilterChange("day", "Tomorrow", e.target.checked)
                }
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Tommorow</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                checked={filters.day.ThisWeek}
                onChange={(e) =>
                  handleFilterChange("day", "ThisWeek", e.target.checked)
                }
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>This Week</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                name=""
                id=""
                checked={filters.day.ThisMonth}
                onChange={(e) =>
                  handleFilterChange("day", "ThisMonth", e.target.checked)
                }
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>This Month</h2>
            </div>
          </div>
        </div>
        <div className="border-gray-400 border-b space-y-3 mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px] text-xl">Pricing</h3>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                checked={filters.pricing.free}
                onChange={(e) =>
                  handleFilterChange("pricing", "free", e.target.checked)
                }
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Free</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                name=""
                id=""
                checked={filters.pricing.paid}
                onChange={(e) =>
                  handleFilterChange("pricing", "paid", e.target.checked)
                }
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Paid</h2>
            </div>
          </div>
        </div>
        <div className="border-gray-400 border-b space-y-3 mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px] text-xl">Categories</h3>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Music</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Comedy</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Sports</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Food & Drinks</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Movie</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Workshops</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Dance</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Art</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Other</h2>
            </div>
          </div>
        </div>
        <div className="mb-[100px] space-y-3 pl-[30px]">
          <h3 className="font-medium mb-[20px]">Near By Cities</h3>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Ahmedabad</h2>
            </div>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Gandhinagar</h2>
            </div>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Surat</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full ml-4 mt-14">
        {" "}
        {/* Adjusted margin-left */}
        <div className="flex justify-center sm:justify-normal">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Events
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {dayResult.length > 0 ? (
            dayResult.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <div>No events found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
