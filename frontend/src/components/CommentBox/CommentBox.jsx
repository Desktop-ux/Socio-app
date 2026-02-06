import "./CommentBox.css";

export default function CommentBox({ comments }) {
  if (!comments || comments.length === 0) return null;

  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <span className="comment-user">{comment.username}</span>
          <span className="comment-text">{comment.text}</span>
        </div>
      ))}
    </div>
  );
}
