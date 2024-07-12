import { Link } from "react-router-dom";
import useRelatedVideos from "../hooks/useRelatedVideos";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = ({categoryId}) => {

    const relatedVideos = useRelatedVideos(categoryId);

    if(!relatedVideos)
        return null;

    return (
        <div className="mr-2">
            {
                relatedVideos.map(video => (
                    <Link
                        key={video.id}
                        to={`?v=${video.id}`}
                    >
                        <RelatedVideoCard video={video} />
                    </Link>
                ))
            }
        </div>
    );
}

export default RelatedVideos;