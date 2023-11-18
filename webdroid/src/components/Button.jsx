const Button = ({ link, text, py, px }) => {
    return (
        <a
            href={link}
            className={`bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] rounded-[20px] ${px} ${py} font-poppins font-semibold text-white text-[20px]`}
        >
            {text}
        </a>
    )
}

export default Button;
