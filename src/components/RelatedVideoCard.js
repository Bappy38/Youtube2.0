import ReactTimeAgo from "react-time-ago";
import { toFormattedNumber } from "../utils/numberFormatter";


const RelatedVideoCard = ({video}) => {

    const { snippet, statistics } = video;
    const { title, publishedAt, channelTitle, thumbnails } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="flex h-[95px] w-[400px] mb-2">
            <img
                className="w-[180px] rounded-lg"
                alt="Thubnail" 
                src={thumbnails.medium.url} />

            <div className="ml-2">
                <div 
                    className="text-base font-semibold line-clamp-2"
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
    );
}

export default RelatedVideoCard;