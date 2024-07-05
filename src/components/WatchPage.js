import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoPlayer from "./VideoPlayer";
import useVideoDetail from "../hooks/useVideoDetail";
import useChannelInfo from "../hooks/useChannelInfo";
import LiveChat from "./LiveChat";

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
    
    const { title, description, channelId  } = videoDetail?.snippet;
    const { likeCount, viewCount, commentCount } = videoDetail?.statistics;

    return (
        <div className="pt-20 pl-24">
            <div className="flex mr-14 h-[525px]">
                <VideoPlayer videoId={videoId} videoTitle={title} likeCount={likeCount} channelTitle={channelTitle} channelLogo={logoUrl} subscriberCount={subscriberCount}/>
                <LiveChat/>
            </div>
            <CommentsContainer commentCount={videoDetail?.statistics?.commentCount} videoId={videoId}/>
        </div>
    );
}

export default WatchPage;