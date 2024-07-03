import CommentList from "./CommentList";
import useComments from "../hooks/useComments";

const CommentsContainer = ({videoId}) => {

    const comments = useComments(videoId);
    console.log(comments);
    const temp = comments.filter(item => item.snippet.totalReplyCount > 0);
    console.log(temp);

    return (
        <div>
            <CommentList comments={comments} isTopLevelComment={true}></CommentList>
        </div>
    );
};

export default CommentsContainer;