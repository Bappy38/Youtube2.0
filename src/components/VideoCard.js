import ReactTimeAgo from "react-time-ago";

const VideoCard = ({video}) => {

    // console.log(video);
    const { snippet, statistics } = video;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics;

    const getViewCountText = () => {

        if (viewCount >= 1e9)
            return `${(viewCount / 1e9).toFixed(1)}B`;
        if (viewCount >= 1e6)
            return `${(viewCount / 1e6).toFixed(1)}M`;
        if (viewCount >= 1e3)
            return `${(viewCount / 1e3).toFixed(0)}K`;
        return viewCount;
    }

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
                {getViewCountText()} views
                <span className="mx-1">•</span>
                <ReactTimeAgo date={new Date(publishedAt)} locale="en-US"/>
            </div>
        </div>
    );
}

export default VideoCard;