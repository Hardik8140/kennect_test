import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "../Components/Post";
import AddPost from "../Components/AddPost";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      <Route path="/addPost" element={<AddPost />} />
    </Routes>
  );
};

export default AllRoutes;
