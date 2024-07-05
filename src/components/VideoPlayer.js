import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toFormattedNumber } from "../utils/toFormattedNumber";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = (props) => {

    const { videoId, videoTitle, likeCount, channelTitle, channelLogo, subscriberCount  } = props;

    return (
        <div className="">
            <div className="mt-2 rounded-lg">
                <iframe
                    className="rounded-xl"
                    width="660"
                    height="400"
                    src={"https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </div>

            <div className="w-[660px] mt-2">
                <div className="font-semibold text-xl">{videoTitle}</div>
            </div>
            <div className="flex mt-3 h-10">
                <img className="h-11 w-11 cursor-pointer rounded-full" alt="Logo" src={channelLogo} />

                <div className="ml-3">
                    <h1 className="font-semibold cursor-pointer">{channelTitle}</h1>
                    <div className="text-gray-600 font-normal text-sm">
                        {toFormattedNumber(subscriberCount)} subscribers
                    </div>
                </div>

                <button
                    className="
                        ml-5
                        bg-gray-950
                        text-white 
                        font-medium 
                        rounded-full
                        px-4
                        h-full"
                >
                    Subscribe
                </button>

                <div className="flex ml-28">
                    <div className="bg-zinc-100 ml-5 rounded-full">
                        <button className="cursor-pointer px-3 h-full border-r border-gray-200 rounded-l-full hover:bg-gray-300">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span className="pl-2">{toFormattedNumber(likeCount)}</span>
                        </button>
                        
                        <button className="cursor-pointer px-3 h-full rounded-r-full hover:bg-gray-200">
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                    </div>

                    <button className="ml-2 px-3 bg-zinc-100 rounded-full hover:bg-gray-200">
                        <FontAwesomeIcon className="pr-2" icon={faShare} />
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;