import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
    HamburgerIcon,
    Logo,
    UserIcon,
} from "../constants/AppConstants";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/configSlice';
import { useState } from 'react';
import useSearchSuggestions from '../hooks/useSearchSuggestions';

const Header = () => {

    const [ searchQuery, setSearchQuery ] = useState('');
    const [ showSearchSuggestion, setShowSearchSuggestion ] = useState(false);

    const searchSuggestion = useSearchSuggestions(searchQuery);

    const dispatch = useDispatch();

    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar());
    }

    return (
        <div className="flex items-center justify-between px-6 py-3 fixed w-full bg-white">
            <div className="flex items-center space-x-4">
                <img
                    className="p-2 h-9 cursor-pointer hover:bg-gray-200 rounded-full"
                    alt="menu-icon"
                    src={HamburgerIcon}
                    onClick={toggleSidebarHandler}
                />

                <a href='/'>
                    <img
                        className="h-8 cursor-pointer"
                        alt="logo"
                        src={Logo}
                    />
                </a>
            </div>

            <div className='items-center w-6/12'>
                <div className="flex">
                    <div className='w-[90%]'>
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
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSearchSuggestion(true)}
                            onBlur={() => setShowSearchSuggestion(false)}
                        />
                    </div>
                    <div className='w-[10%]'>
                        <button className="
                            px-4
                            py-2
                            rounded-r-full
                            bg-gray-200
                            hover:bg-gray-300
                            opacity-80
                            border
                            border-gray-400
                            focus:outline-none
                            w-full"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                
                {
                    showSearchSuggestion && searchSuggestion.length > 0 && (<div className='
                    fixed
                    bg-white
                    rounded-xl
                    shadow-lg
                    mt-1
                    py-3
                    border
                    border-gray-300
                    w-[43.5%]'
                    >
                        <ul>
                            { searchSuggestion.map((suggestion) => (
                                    <li 
                                        key={suggestion}
                                        className='px-4 py-2 cursor-default hover:bg-gray-200'
                                        onClick={() => setSearchQuery(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>)
                }
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
