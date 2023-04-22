import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./postsItem.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";




const postsItem = (props) => {
  const { title, body, tags, reactions } = props;
  return (
    <div>
        
          <Box className='container'>
            <Card className='card'>
                <Box>
                    <img src="https://amibba.com/wp-content/uploads/2020/02/icon3.png" />
                </Box>
                <Box className="title">
                    <Typography variant='h5' className="titleHeading">TITLE: </Typography>
                    <Typography className="titleSubHeading" variant='h6'>{title.slice(0,22)}.....</Typography>
                </Box>
                <Box className='content'>
                    <Typography className="contentBody" variant='body2'>{body.slice(0,250)}.</Typography>
                <Typography className="tags">
                    Tags: <span>{tags}</span>
                  </Typography>
                  </Box>
                  <Box className="reactions">
                    <Typography>
                      <FavoriteBorderIcon />
                      {reactions}
                    </Typography>
                  </Box>
            </Card>
          </Box>
    </div>
  );
};

export default postsItem;
