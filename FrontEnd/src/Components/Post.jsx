import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, getPost } from "../Redux/action";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((store) => store.postReducer.post);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getPost(searchTerm));
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(post);
  }, [post]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handelComment = useCallback(
    (e, id) => {
      e.preventDefault();
      const com = { comment };
      dispatch(getComment(id, com));

      setFilteredPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === id
            ? { ...post, comment: [...(post.comment || []), { comment }] }
            : post
        )
      );
      setComment("");
    },
    [comment, dispatch]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "10px",
          borderRadius: "5px",
        }}
      />
      {Array.isArray(filteredPosts) &&
        filteredPosts.map((el) => (
          <div
            key={el._id}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              margin: "10px",
            }}
          >
            <h3>{el.user}</h3>
            <p>{el.message}</p>
            <div>
              <form onSubmit={(e) => handelComment(e, el._id)}>
                <input
                  type="text"
                  placeholder="Enter comments"
                  onChange={(e) => setComment(e.target.value)}
                />
                <input type="submit" value="Comment" />
              </form>
              {el.comment &&
                el.comment.map((comment) => (
                  <div key={comment._id}>
                    <p>{comment.comment}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
