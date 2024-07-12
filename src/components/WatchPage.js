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
import RelatedVideos from "./RelatedVideos";

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
    
    const { title, description, channelId, categoryId, liveBroadcastContent } = videoDetail?.snippet;
    const { likeCount, viewCount, commentCount } = videoDetail?.statistics;

    const isLiveVideo = liveBroadcastContent === "live";

    return (
        <div className="pt-20 pl-20 flex w-full">
            <div className="mr-5 w-[60%] flex-shrink-0">
                <div className="flex h-[525px] w-full">
                    <VideoPlayer
                        videoId={videoId}
                        videoTitle={title}
                        likeCount={likeCount}
                        channelTitle={channelTitle}
                        channelLogo={logoUrl}
                        subscriberCount={subscriberCount}/>
                </div>
                <CommentsContainer commentCount={videoDetail?.statistics?.commentCount} videoId={videoId}/>
            </div>
            <div className="flex-shrink-0">
                {!isLiveVideo && <RelatedVideos categoryId={categoryId}/>}
                {isLiveVideo && <LiveChat/>}
            </div>
        </div>
    );
}

export default WatchPage;