import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategoryId } from "../store/configSlice";

const Category = ({id, name}) => {

    const dispatch = useDispatch();
    const selectedCategoryId = useSelector((store) => store.config.selectedCategoryId);

    return (
        <div>
            <button
                onClick={() => dispatch(setSelectedCategoryId(id))}
                className={
                    selectedCategoryId !== id?
                    `px-3 py-1 ml-3
                    bg-gray-200
                    rounded-lg
                    font-semibold
                    hover:bg-gray-300
                    whitespace-nowrap`
                    :
                    `px-3 py-1 ml-3
                    bg-black
                    rounded-lg
                    font-semibold
                    whitespace-nowrap
                    text-white`
                }
            >
                {name}
            </button>
        </div>
    );
}

export default Category;