import Comment from "./Comment";

const CommentList = ({isTopLevelComment, comments}) => {

    return (
        <div>
            <div>
                {isTopLevelComment && comments.map((comment) => (
                    <Comment key={comment.id} comment={comment.snippet.topLevelComment.snippet}></Comment>
                ))}
            </div>
            <div>
                {!isTopLevelComment && comments.map((comment) => (
                    <Comment key={comment.id} comment={comment.snippet}></Comment>
                ))}
            </div>
        </div>
    );
}

export default CommentList;