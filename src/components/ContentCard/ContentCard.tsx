import { Post } from "../../redux/interfaces/PostInterface";
import "./ContentCard.scss";

interface Props {
  post: Post;
}

const ContentCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="post-card">
      <p className="post-title">{post.title}</p>
      <p className="post-body">{post.body}</p>
      <div className="post-info">
        <p className="post-postid">Postid: {post.id}</p>
        <p className="post-userid">Userid: {post.userId}</p>
      </div>
    </div>
  );
};

export default ContentCard;
