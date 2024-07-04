import Comment from "./Comment";

const CommentList = ({isTopLevelComment, comments}) => {

    return (
        <div className="ml-1">
            <div>
                {comments.map((comment) => (
                    <Comment key={comment.id} isTopLevelComment={isTopLevelComment} comment={comment}></Comment>
                ))}
            </div>
        </div>
    );
}

export default CommentList;