import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoPlayer from "./VideoPlayer";
import useVideoDetail from "../hooks/useVideoDetail";
import useChannelInfo from "../hooks/useChannelInfo";
import { toFormattedNumber } from "../utils/toFormattedNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [ params ] = useSearchParams();
    const videoId = params.get("v");

    useEffect(() => {
        
        dispatch(closeSidebar());
    }, []);

    const videoDetail = useVideoDetail(videoId);
    const {channelTitle, logoUrl, subscriberCount} = useChannelInfo(videoDetail?.snippet?.channelId);

    if (!videoDetail)
        return;
    
    // const { title, description, channelId, channelTitle  } = videoDetail?.snippet;
    const { likeCount, viewCount, commentCount } = videoDetail?.statistics;

    return (
        <div className="pt-20 pl-24">
            <VideoPlayer videoId={videoId}/>
            <div className="w-[660px] mt-2">
                <div className="font-semibold text-xl">{videoDetail?.snippet?.title}</div>
            </div>
            <div className="flex mt-3 h-10">
                <img className="h-11 w-11 cursor-pointer rounded-full" alt="Logo" src={logoUrl} />

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
            <CommentsContainer commentCount={videoDetail?.statistics?.commentCount} videoId={videoId}/>
        </div>
    );
}

export default WatchPage;