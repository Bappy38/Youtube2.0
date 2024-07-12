import ReactTimeAgo from "react-time-ago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import CommentList from "./CommentList";
import { toFormattedPositiveNumber } from "../utils/numberFormatter";


const Comment = ({isTopLevelComment, comment}) => {

    if (!comment)
        return null;

    const originalComment = isTopLevelComment
        ?
        comment?.snippet?.topLevelComment?.snippet
        :
        comment?.snippet;

    const
    {
        authorDisplayName,
        authorChannelUrl,
        authorProfileImageUrl,
        likeCount,
        publishedAt,
        textDisplay
    } = originalComment;

    const likeCountText = toFormattedPositiveNumber(likeCount);

    return (
        <div>
            <div className="pt-5 flex">
                <div className="flex-shrink-0">
                    <img
                        className="w-9 h-9 cursor-pointer rounded-full"
                        alt="user-icon"
                        src={authorProfileImageUrl}
                    />
                </div>

                <div className="ml-4">
                    <div className="flex">
                        <a
                            className="font-medium"
                            href={authorChannelUrl}
                        >
                            {authorDisplayName}
                        </a>

                        <div className="ml-3 mt-1 text-gray-600 font-normal text-sm">
                            <ReactTimeAgo date={new Date(publishedAt)} locale="en-US"/>
                        </div>
                    </div>

                    <div>
                        {textDisplay}
                    </div>

                    <div>
                        <button className="cursor-pointer hover:bg-gray-200 w-8 h-8 rounded-full">
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        
                        <span className="">{likeCountText}</span>
                        
                        <button className="ml-3 cursor-pointer hover:bg-gray-200 w-8 h-8 rounded-full">
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="ml-8 border-l-2 border-gray-200">
                {comment?.replies && (
                    <CommentList isTopLevelComment={false} comments={comment?.replies?.comments} />
                )}
            </div>
        </div>
    );
}

export default Comment;