import { useDispatch } from "react-redux";
import { removePost } from "../../../redux/action-creators/Posts";
import { Post } from "../../../redux/interfaces/PostInterface";
import "./Card.scss";

interface Props {
  post: Post;
}

const ContentCard: React.FC<Props> = ({ post }) => {
  const {title, body, id, userId} = post;
  const dispatch = useDispatch();

  const deletePost = (id: number) => {
    console.log("borrando post");

    dispatch(removePost(id));
  };

  return (
    <div className="post-card">
      <p className="post-title">{title}</p>
      <p className="post-body">{body}</p>
      <div className="post-info">
        <p className="post-postid">Postid: {id}</p>
        <p className="post-userid">Userid: {userId}</p>
      </div>
      <div className="action-buttons">
        <button className="button edit">Edit</button>
        <button className="button delete" onClick={() => deletePost(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
