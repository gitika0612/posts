import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./posts.css";
import axios from "axios";
import PostItem from "./postsItem";

const Posts = () => {
  const [data, setData] = useState();
  const baseUrl = "https://dummyjson.com/posts";

  const getPosts = () => {
    axios.get(`${baseUrl}`).then((res) => {
      setData(res.data.posts);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
        <Box className="headingContainer">
          <Typography variant="h5" className="heading">
            SHORT STORIES
          </Typography>
          <Typography variant="h6" className="subHeading">
            Stories are best when they brings positive mind.
          </Typography>
        </Box>
        <Box className="itemContainer">
          {data?.map((item) => {
            return (
              <PostItem
                id={item?.id}
                title={item?.title}
                body={item?.body}
                tags={item?.tags.toString()}
                reactions={item?.reactions}
              />
            );
          })}
        </Box>
    </>
  );
};

export default Posts;
