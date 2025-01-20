import Right from "../assets/svg/Pine_Right.jsx";
import Left from "../assets/svg/Pine_Left.jsx";

export const Background = () => (
  <div className="absolute flex items-center justify-center w-full h-screen">
    <div className="rounded-full w-[140px] h-[140px] border border-white absolute z-1 flex justify-center items-center bg-gray-100">
      <div className="rounded-full w-[340px] h-[340px] border border-white absolute z-1 flex justify-center items-center">
        <div className="rounded-full w-[540px] h-[540px] border border-white absolute z-1 flex justify-center items-center">
          <div className="rounded-full w-[940px] h-[940px] border border-white absolute z-1 flex justify-center items-center">
            <div className="rounded-full w-[1340px] h-[1340px] border border-white absolute z-1 flex justify-center items-center">
              <div className="rounded-full w-[1740px] h-[1740px] border border-white absolute z-1 flex justify-center items-center">
                <div className="flex gap-4">
                  <Left />
                  <Right />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
