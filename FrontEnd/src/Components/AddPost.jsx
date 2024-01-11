import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMessage } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { user, message };
    dispatch(postMessage(postData));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Add Post" />
      </form>
    </div>
  );
};

export default AddPost;
