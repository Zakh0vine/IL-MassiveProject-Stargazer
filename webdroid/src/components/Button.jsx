const Button = (props) => {
    return (
        <a
            href={props.link}
            className="bg-[#6499E9] hover:bg-[#5081cc] active:bg-[#426eb1] focus:outline-none focus:ring focus:ring-[#97bcf4] rounded-[20px] px-6 py-4 font-poppins font-semibold text-white text-[20px]"
        >
            {props.text}
        </a>
    )
}

export default Button;
