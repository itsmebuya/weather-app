import Img from "../assets/moon.png";
import Snow from "../assets/night-snowy.png";
import Rain from "../assets/night-rainy.png";
import Cloud from "../assets/night-cloud.png";
import Thunder from "../assets/night-thunder.png";
import Windy from "../assets/night-windy.png";
import {UserIcon} from "../assets/svg/UserIcon"
import {HomeIcon} from "../assets/svg/HomeIcon"
import {FavoriteIcon} from "../assets/svg/FavoriteIcon"
import {Location} from "../assets/svg/LocationIcon"

const DarkRight = (props) => {
  const { city, condition, data, isLoading } = props;

  const conditionState = () => {
    switch (true) {
      case condition.includes("snow"):
        return Snow;
      case condition.includes("rain"):
        return Rain;
      case condition.includes("cloud"):
        return Cloud;
      case condition.includes("thunder"):
        return Thunder;
      case condition.includes("windy"):
        return Windy;
      default:
        return Img;
    }
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="rounded-[48px] bg=[#e71e71] w-[414px] h-[832px] py-10 px-14 absolute z-30 bg-[#111827BF] right-[200px] top-[170px] ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-start">
          <div className="text-lg text-[#9CA3AF] font-medium">
            {new Date().toDateString()}
          </div>
          <div className="text-4xl not-italic font-extrabold leading-normal text-white">
            {city}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="16"
            cy="13"
            r="2"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <img src={conditionState()} alt="Moon" className="mt-[50px]" />
      <div className="flex flex-col">
        <p className="text-[110px] text-extrabold">{data}°</p>
        <p className="text-[#777CCE] text-2xl font-extrabold">{condition}</p>
      </div>
      <div className="flex justify-between items-center mt-[30px]">
        <HomeIcon color={"#F9FAFB"} />
        <Location color={"#4B5563"}/>
        <FavoriteIcon color={"#4B5563"}/>
        <UserIcon color={"#4B5563"} />
      </div>
    </div>
  );
};
export default DarkRight;
