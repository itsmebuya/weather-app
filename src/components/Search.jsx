
const Search = (props) => {
    const { onChange, searchValue, filtered, handleClickCity } = props;
    console.log(filtered);


    return (
        <>
            <div className="absolute flex items centered mt-[30px] z-50 flex-col gap-4 ">
                <div className="bg-white flex gap-4 py-4 px-6 rounded-[48px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <g opacity="0.2">
                            <path d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z" fill="black" />
                        </g>
                    </svg>
                    <input type="text" placeholder="Search" className="text-black text-[32px] text-bold border-transparent" onChange={onChange} value={searchValue} />
                </div>
                
                <div className="flex flex-col bg-white rounded-[24px] py-4 px-6">
                    {filtered?.map((el) => {
                        return <div className="flex gap-3 items-center cursor-pointer" onClick={() => handleClickCity(el)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="16" cy="13" r="2" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p key={el} className='text-black font-bold text-[28px]'>{el}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Search;