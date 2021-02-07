import React, { useState, useEffect, Fragment } from "react";
import db from "../firebase";
import PostPreview from "./PostPreview.js";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subheader: {
    margin: 22,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
  },
});

export default function PostFeed() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(posts);

  const postLength = posts.length;

  return (
    <Fragment>
      <Typography className={classes.subheader}>{postLength} posts</Typography>
      <div>
        {posts.map((post) => (
          <PostPreview key={post} title={post.title} body={post.body} />
        ))}
      </div>
    </Fragment>
  );
}
