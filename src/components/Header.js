import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HamburgerIcon, Logo, UserIcon } from "../constants/AppConstants";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6 mt-2">
            <div className="flex items-center space-x-4">
                <img
                    className="h-8 cursor-pointer"
                    alt="menu-icon"
                    src={HamburgerIcon}
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
                        rounded-l-2xl
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
                    rounded-r-2xl
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
