import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/action-creators/Posts";
import { AppState } from "../../redux/store";

import ContentCard from "../ContentCard/ContentCard";

const Content: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: AppState) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="content">
      <h3 className="content-title">List of posts</h3>
      <div className="content-posts">
        {posts ? (
          posts.map((post, index) => <ContentCard post={post} key={index} />)
        ) : (
          <p>No posts</p>
        )}
      </div>
    </div>
  );
};

export default Content;
