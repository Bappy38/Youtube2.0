import ReactTimeAgo from "react-time-ago";
import { toFormattedNumber } from "../utils/toFormattedNumber";

const VideoCard = ({video}) => {

    const { snippet, statistics } = video;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics;

    if (!video || !thumbnails?.standard?.url)
        return null;

    return (
        <div className="w-[330px] m-[6px]">
            <div className="h-[11.6rem] overflow-hidden">
                <img 
                    className="rounded-xl object-cover h-full w-full"
                    alt="Thumbnail" 
                    src={thumbnails?.standard?.url}/>
            </div>

            <div 
                className="mt-2 text-lg font-semibold line-clamp-2"
            >
                {title}
            </div>

            <div className=" text-gray-600 font-normal text-sm">{channelTitle}</div>

            <div className="text-gray-600 font-normal text-sm">
                {toFormattedNumber(viewCount)} views
                <span className="mx-1">•</span>
                <ReactTimeAgo date={new Date(publishedAt)} locale="en-US"/>
            </div>
        </div>
    );
}

export default VideoCard;