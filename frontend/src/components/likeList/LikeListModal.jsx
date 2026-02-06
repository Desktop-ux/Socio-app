import "./likeList.css";

export default function LikeListModal({ likes, onClose }) {
  return (
    <div className="like-modal-backdrop">
      <div className="like-modal">
        {/* HEADER */}
        <div className="like-modal-header">
          <span>Likes</span>
          <button onClick={onClose}>✕</button>
        </div>

        {/* LIST */}
        <div className="like-modal-list">
          {likes.map((user, index) => (
            <div key={index} className="like-user-row">
              <div className="like-user-left">
                <div className="like-avatar">
                  {user[0].toUpperCase()}
                </div>
                <div className="like-username">{user}</div>
              </div>

              <button className="follow-btn">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
