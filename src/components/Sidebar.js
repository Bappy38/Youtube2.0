import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClockRotateLeft, faFire, faGamepad, faGuitar, faHouse, faMusic, faPlay, faUsersRectangle, faVolleyball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {

    return (
        <div className="shadow-md p-2 text-base w-2/12 h-screen overflow-y-auto">
            <div className="mt-4">
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faHouse} />
                        Home
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faPlay} />
                        Shorts
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faSquareYoutube} />
                        Subscription
                    </li>
                </ul>
            </div>

            <div className="mt-2 border-t">
                <h1 className="px-3 py-2 font-semibold">You</h1>
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faUsersRectangle} />
                        Your Channel
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faClockRotateLeft} />
                        History
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faMusic} />
                        Playlist
                    </li>
                </ul>
            </div>

            <div className="mt-2 border-t">
                <h1 className="px-3 py-2 font-semibold">Explore</h1>
                <ul>
                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faFire} />
                        Trending
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faGuitar} />
                        Music
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faGamepad} />
                        Gaming
                    </li>

                    <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-3" icon={faVolleyball} />
                        Sports
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;