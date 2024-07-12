import ReactTimeAgo from "react-time-ago";
import { toFormattedNumber } from "../utils/numberFormatter";
import useChannelInfo from "../hooks/useChannelInfo";
import { UserIcon } from "../constants/AppConstants";

const VideoCard = ({video}) => {

    const { snippet, statistics } = video;
    const { thumbnails, title, channelTitle, channelId, publishedAt } = snippet;
    const { viewCount } = statistics;

    // Disabled to avoid lots of API call
    const { logoUrl } = useChannelInfo(channelId);

    if (!video || !thumbnails?.standard?.url)
        return null;

    return (
        <div className="w-[350px] m-[6px]">
            <div className="h-[12rem] overflow-hidden">
                <img 
                    className="rounded-xl object-cover h-full w-full"
                    alt="Thumbnail" 
                    src={thumbnails?.standard?.url}/>
            </div>

            <div className="flex mt-2">
                <img className="h-11 w-11 cursor-pointer rounded-full" alt="Logo" src={logoUrl} />
                <div className="ml-3">
                    <div 
                        className="text-lg font-semibold line-clamp-2"
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
            </div>
        </div>
    );
}

export default VideoCard;