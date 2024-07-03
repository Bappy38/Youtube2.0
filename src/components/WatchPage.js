import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoPlayer from "./VideoPlayer";
import useVideoDetail from "../hooks/useVideoDetail";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [ params ] = useSearchParams();
    const videoId = params.get("v");

    useEffect(() => {
        
        dispatch(closeSidebar());
    }, []);

    const videoDetail = useVideoDetail(videoId);

    if (!videoDetail)
        return;
    
    // const { title, description, channelTitle  } = videoDetail?.snippet;
    // const { likeCount, viewCount } = videoDetail?.statistics;

    return (
        <div className="pt-20 pl-24">
            <VideoPlayer videoId={videoId}/>
            <div className="w-[660px] mt-2">
                <div className="font-semibold text-xl">{videoDetail?.snippet?.title}</div>
            </div>
            {/* Channel Subscribe Like Share */}
            <CommentsContainer videoId={videoId}/>
        </div>
    );
}

export default WatchPage;