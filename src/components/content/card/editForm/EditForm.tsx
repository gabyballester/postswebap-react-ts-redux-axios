import { Post } from "../../../../redux/interfaces/PostInterface";
import Modal from "../../../modalPopup/Modal";
import "./EditForm.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../../redux/action-creators/Posts";

interface Props {
  post: Post;
  closeModal: () => void;
}

type EditPost = {
  id: number;
  userId: number
  title: string;
  body: string;
};

const EditForm: React.FC<Props> = ({ post, closeModal }) => {
  const [data, setData] = useState<EditPost>({
    id : post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
  });

  const dispatch = useDispatch();

  type handlerElement =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>;

  const handleChange = (e: handlerElement) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    dispatch(updatePost(data))
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div className="modal-header">
          <p className="modal-header-title">Edit post</p>
        </div>
        <div className="modal-body">
          <div className="modal-row">
            <label htmlFor="title" className="modal-post-text">
              Title:
            </label>
            <input
              id="title"
              onChange={(e) => handleChange(e)}
              type="text"
              name="title"
              value={data.title}
            />
          </div>
          <div className="modal-row">
            <label htmlFor="body" className="modal-post-text">
              Body:
            </label>
            <textarea
              onChange={(e) => handleChange(e)}
              value={data.body}
              id="body"
              name="body"
            ></textarea>
          </div>
        </div>
        <div className="action-buttons">
          <button type="submit" className="button-modal btn-modal-update">
            Update
          </button>
          <button
            className="button-modal btn-modal-cancel"
            onClick={(e) => closeModal()}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditForm;
