import CommentList from "./CommentList";
import useComments from "../hooks/useComments";

const CommentsContainer = ({commentCount, videoId}) => {

    const comments = useComments(videoId);

    return (
        <div className="pt-5">
            <h1 className="text-xl font-semibold">{commentCount} Comments</h1>
            <CommentList comments={comments} isTopLevelComment={true}></CommentList>
        </div>
    );
};

export default CommentsContainer;