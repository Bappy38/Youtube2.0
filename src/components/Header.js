import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HamburgerIcon, Logo, UserIcon } from "../constants/AppConstants";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/configSlice';

const Header = () => {

    const dispatch = useDispatch();

    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar());
    }

    return (
        <div className="flex items-center justify-between px-6 mt-2">
            <div className="flex items-center space-x-4">
                <img
                    className="p-2 h-9 cursor-pointer hover:bg-gray-200 rounded-full"
                    alt="menu-icon"
                    src={HamburgerIcon}
                    onClick={toggleSidebarHandler}
                />

                <img
                    className="h-8 cursor-pointer"
                    alt="logo"
                    src={Logo}
                />
            </div>

            <div className="flex items-center w-5/12">
                <input 
                    type="text" 
                    className="
                        px-4
                        py-2
                        rounded-l-full
                        text-black
                        border
                        border-gray-400
                        focus:outline-none
                        w-full" 
                    placeholder="Search"
                />
                <button className="
                    px-4
                    py-2
                    rounded-r-full
                    bg-gray-200
                    hover:bg-gray-300
                    opacity-80
                    border
                    border-gray-400
                    focus:outline-none"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <img
                    className="w-8 h-8 rounded-full"
                    alt="user-icon"
                    src={UserIcon}
                />
            </div>
        </div>
    );
}

export default Header;
