import ReactTimeAgo from "react-time-ago";
import { UserIcon, VerifiedIcon } from "../constants/AppConstants";


const SearchResult = ({video}) => {

    const { snippet } = video;
    const { title, description, liveBroadcastContent, channelTitle, channelId, publishedAt, thumbnails } = snippet;
    const isLiveVideo = liveBroadcastContent === "live";

    if (!video)
        return null;

    return (
        <div className="flex h-[220px] px-12 mb-4">
            <div className="h-full w-4/12 overflow-hidden">
                <img
                    className="rounded-xl w-full h-full object-cover"
                    alt="Thumbnail"
                    src={thumbnails?.high?.url}/>
            </div>
            <div className="h-full ml-5 w-8/12">
                <div 
                    className="text-2xl font-normal line-clamp-2"
                >
                    {title}
                </div>

                <div className="text-gray-600 font-normal text-sm mt-1">
                    <ReactTimeAgo date={new Date(publishedAt)} locale="en-US"/>
                </div>

                <div className="my-3 flex h-6">
                    <img className="cursor-pointer rounded-full" alt="Logo" src={UserIcon} />
                    <span className="ml-2 text-gray-600 font-normal text-sm self-center">{channelTitle}</span>
                    <img className="ml-2 h-4 self-center" alt="Verified" src={VerifiedIcon}/>
                </div>

                <div className="text-gray-600">{description}</div>

                { isLiveVideo && (
                    <div className="mt-1">
                        <button className="bg-red-700 text-white text-sm px-1">LIVE</button>
                        <button className="ml-2 bg-gray-200 text-gray-500 px-1 text-sm font-medium">New</button>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default SearchResult;