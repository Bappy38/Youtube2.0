
const Button = ({name}) => {

    return (
        <div>
            <button
                className="
                    bg-gray-200
                    px-3
                    py-1
                    rounded-lg
                    font-semibold
                    ml-3
                    hover:bg-gray-300
                    whitespace-nowrap"
            >
                {name}
            </button>
        </div>
    );
}

export default Button;