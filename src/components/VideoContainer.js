import usePopularVideos from "../hooks/usePopularVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

    const popularVideos = usePopularVideos();

    return (
        <div className="flex flex-wrap ml-[15%]">
            {popularVideos.map(video => (
                <VideoCard key={video.id} video={video}/>
            ))}
        </div>
    );
}

export default VideoContainer;