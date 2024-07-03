

const Comment = ({comment}) => {

    console.log(comment);

    return (
        <div>
            {comment.textDisplay}
        </div>
    );
}

export default Comment;