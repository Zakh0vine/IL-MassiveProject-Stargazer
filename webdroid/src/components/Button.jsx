const Button = ({ link, text, customClass }) => {
    return (
        <a
            href={link}
            className={`bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] font-poppins font-semibold text-white text-[20px] ${customClass}`}
        >
            {text}
        </a>
    )
}

export default Button;
