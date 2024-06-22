import { Link } from "react-router-dom";
import usePopularVideos from "../hooks/usePopularVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

    const popularVideos = usePopularVideos();

    return (
        <div className="flex flex-wrap ml-[15%]">
            {popularVideos.map(video => (
                <Link
                    key={video.id}
                    to={ `watch?v=${video.id}` }
                >
                    <VideoCard video={video}/>
                </Link>
            ))}
        </div>
    );
}

export default VideoContainer;