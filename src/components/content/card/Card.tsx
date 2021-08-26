import { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../../../redux/action-creators/Posts";
import { Post } from "../../../redux/interfaces/PostInterface";
import EditForm from "../../modalPopup/EditForm";
import "./Card.scss";

interface Props {
  post: Post;
}

const Card: React.FC<Props> = ({ post }) => {
  const { title, body, id, userId } = post;
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  const deletePost = (id: number) => {
    dispatch(removePost(id));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
        <button className="button edit" onClick={() => openModal()}>
          Edit
        </button>
        <button className="button delete" onClick={() => deletePost(id)}>
          Delete
        </button>
      </div>
      {showModal && <EditForm post={post} closeModal={closeModal} />}
    </div>
  );
};

export default Card;
