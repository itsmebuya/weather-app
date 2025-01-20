import { Location } from "../assets/svg/LocationIcon";
import { SearchIcon } from "../assets/svg/SearchIcon";

const Search = (props) => {
  const { onChange, searchValue, filtered, handleClickCity } = props;

  return (
    <>
      <div className="absolute flex items centered mt-[30px] z-50 flex-col gap-4 ">
        <div className="bg-white flex gap-4 py-4 px-6 rounded-[48px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="text-black text-[32px] text-bold border-transparent"
            onChange={onChange}
            value={searchValue}
          />
        </div>

        {filtered?.length ? (
          <div className="flex flex-col bg-white rounded-[24px] py-4 px-6">
            {filtered?.map((el) => {
              return (
                <div
                  key={el}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handleClickCity(el)}
                >
                  <Location color={"#9CA3AF"} />

                  <p key={el} className="text-black font-bold text-[28px]">
                    {el}
                  </p>
                </div>
              );
            })}
          </div>
        ):<> </>
        }

      </div>
    </>
  );
};

export default Search;
