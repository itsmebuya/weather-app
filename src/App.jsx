import { useState } from 'react';
import countriesData from './data.jsx'
import Sun from "./components/Sun.jsx"
import Moon from "./components/Moon.jsx"
import Right from "./components/Pine_Right.jsx"
import Left from "./components/Pine_Left.jsx"
import Search from './components/Search.jsx';

function App() {
  const [filter, setFilter] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // console.log(countriesData)

  return (
    <>
      <div className='flex justify-center items-start w-full h-screen bg-gray-100 relative'>
        <div className='flex justify-start items-start w-1/2 h-screen bg-gray-100 '>
          <Sun/>
        </div>
        <div className='flex justify-end items-end w-1/2 h-screen bg-[#0F131E] '>
          <Moon/>
        </div>
        <Search/>

        <div className='flex justify-center items-center absolute w-full h-screen'>

          <div className='rounded-full w-[140px] h-[140px] border border-white absolute z-1 flex justify-center items-center bg-gray-100'>
            <div className='rounded-full w-[340px] h-[340px] border border-white absolute z-1 flex justify-center items-center'>
              <div className='rounded-full w-[540px] h-[540px] border border-white absolute z-1 flex justify-center items-center'>
                <div className='rounded-full w-[940px] h-[940px] border border-white absolute z-1 flex justify-center items-center'>
                  <div className='rounded-full w-[1340px] h-[1340px] border border-white absolute z-1 flex justify-center items-center'>
                    <div className='rounded-full w-[1740px] h-[1740px] border border-white absolute z-1 flex justify-center items-center gap-4'>
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
    </>
  )
}

export default App