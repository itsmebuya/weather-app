
const DarkRight = (props) => {
    const { date, city } = props;


    return (

        <div className="rounded-4xl bg=[#e71e71] w-[414px] h-[832px] py-10 px-14 absolute z-30">
            <div className="flex justify-between">
                <div className="flex flex-col justify-start">
                    <div className="text-lg text-[#9CA3AF] font-medium">{date}</div>
                    <div className="text-white text-5xl font-extrabold not-italic leading-normal">{city}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="16" cy="13" r="2" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <img src="" alt="" />
            <div className="flex flex-col">
                <p></p>
                <p></p>
            </div>
            <div></div>
        </div>
    )
}
export default DarkRight