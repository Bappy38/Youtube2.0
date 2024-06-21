import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion, faClockRotateLeft, faCommentDots, faFire, faFlag, faGamepad, faGear, faGuitar, faHouse, faMusic, faPlay, faUsersRectangle, faVolleyball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Sidebar = () => {

    const isSidebarOpen = useSelector((store) => store.config.isSidebarOpen);

    if (!isSidebarOpen)
        return null;

    return (
        <div className="shadow-md px-2 text-base w-[20%] h-full overflow-y-auto bg-white fixed z-50">
            <div className="mt-4">
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faHouse} />
                        Home
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faPlay} />
                        Shorts
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faSquareYoutube} />
                        Subscription
                    </li>
                </ul>
            </div>

            <div className="mt-2 border-t">
                <h1 className="px-3 py-2 font-semibold">You</h1>
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faUsersRectangle} />
                        Your Channel
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faClockRotateLeft} />
                        History
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faMusic} />
                        Playlist
                    </li>
                </ul>
            </div>

            <div className="mt-2 border-t">
                <h1 className="px-3 py-2 font-semibold">Explore</h1>
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faFire} />
                        Trending
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faGuitar} />
                        Music
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faGamepad} />
                        Gaming
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faVolleyball} />
                        Sports
                    </li>
                </ul>
            </div>

            <div className="mt-2 mb-12 border-t">
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faGear} />
                        Settings
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faCircleQuestion} />
                        Help
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faCommentDots} />
                        Feedback
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="mr-3" icon={faFlag} />
                        Report History
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;