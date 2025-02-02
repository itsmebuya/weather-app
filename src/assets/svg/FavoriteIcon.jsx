export const FavoriteIcon = (props) => {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
        >
            <path
                d="M15.916 7.36858C16.1058 7.58431 16.3793 7.70794 16.6666 7.70795C16.954 7.70796 17.2275 7.58435 17.4173 7.36864C19.8166 4.64263 23.9519 4.1919 26.8935 6.42021C29.9751 8.75461 30.5809 13.1452 28.2465 16.2268L22.1863 24.2268C20.8559 25.9831 18.7762 27.0105 16.5729 26.9999C14.3696 26.9893 12.2998 25.942 10.9863 24.173L5.04639 16.173C2.74173 13.069 3.38969 8.68448 6.49363 6.37982C9.43817 4.19353 13.5363 4.66439 15.916 7.36858Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}