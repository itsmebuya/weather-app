import Img from "../assets/sun.png";
import Snow from "../assets/day-snowy.png";
import Rain from "../assets/day-rainy.png";
import Cloud from "../assets/day-cloud.png";
import Thunder from "../assets/day-thunder.png";
import Windy from "../assets/day-windy.png";
import {UserIcon} from "../assets/svg/UserIcon"
import {HomeIcon} from "../assets/svg/HomeIcon"
import {FavoriteIcon} from "../assets/svg/FavoriteIcon"
import {Location} from "../assets/svg/LocationIcon"

const LightLeft = (props) => {
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
    return <div>loading...</div>;
  }

  return (
    <div className="rounded-[48px] bg=[#e71e71] w-[414px] h-[832px] py-10 px-14 absolute z-30 bg-[#FFFFFFBF] left-[200px] top-[170px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-start">
          <div className="text-lg text-[#6B7280] font-medium">
            {new Date().toDateString()}
          </div>
          <div className="text-4xl not-italic font-extrabold leading-normal text-black">
            {city}
          </div>
        </div>
        <Location color={"#9CA3AF"} />
      </div>

      <img src={conditionState()} alt="Sun" className="mt-[50px]" />
      <div className="flex flex-col">
        <p className="text-[110px] text-extrabold ">{data}°</p>
        <p className="text-[#FF8E27] text-2xl font-extrabold">{condition}</p>
      </div>
      <div className="flex justify-between items-center mt-[30px]">
        <HomeIcon color={"#111827"} />
        <Location color ={"#D1D5DB"}/>
        <FavoriteIcon color={"#D1D5DB"}/>
        <UserIcon color={"#D1D5DB"}/>
      </div>
    </div>
  );
};
export default LightLeft;
