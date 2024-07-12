import { useDispatch } from "react-redux";
import { setSelectedCategoryId } from "../store/configSlice";

const Button = ({id, name}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(setSelectedCategoryId(id))}
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