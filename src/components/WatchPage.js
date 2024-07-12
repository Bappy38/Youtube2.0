import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoPlayer from "./VideoPlayer";
import useVideoDetail from "../hooks/useVideoDetail";
import useChannelInfo from "../hooks/useChannelInfo";
import LiveChat from "./LiveChat";
import WatchPageShimmer from "./WatchPageShimmer";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [ params ] = useSearchParams();
    const videoId = params.get("v");

    useEffect(() => {
        
        dispatch(closeSidebar());
    }, []);

    const videoDetail = useVideoDetail(videoId);
    const isLoading = useSelector((store) => store.config.isLoading);
    const {channelTitle, logoUrl, subscriberCount} = useChannelInfo(videoDetail?.snippet?.channelId);

    // console.log(videoDetail);

    if (isLoading)
        return <WatchPageShimmer/>;

    if (!videoDetail)
        return null;
    
    const { title, description, channelId, liveBroadcastContent } = videoDetail?.snippet;
    const { likeCount, viewCount, commentCount } = videoDetail?.statistics;

    const isLiveVideo = liveBroadcastContent === "live";

    return (
        <div className="pt-20 pl-20">
            <div className="mr-14">
                <div className="flex h-[525px]">
                    <VideoPlayer videoId={videoId} videoTitle={title} likeCount={likeCount} channelTitle={channelTitle} channelLogo={logoUrl} subscriberCount={subscriberCount}/>
                    {isLiveVideo && <LiveChat/>}
                </div>
                <CommentsContainer commentCount={videoDetail?.statistics?.commentCount} videoId={videoId}/>
            </div>
        </div>
    );
}

export default WatchPage;