import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import PostFeed from "./PostFeed.js";

const useStyles = makeStyles({
  root: {
    flex: 0.5,
    maxWidth: 1000,
    margin: 30,
    maxHeight: 500,
    overflow: "scroll",
    minWidth: 500,
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    padding: 15,
    background: "white",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PostsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography>Leanne's Posts</Typography>
        <Typography color="textSecondary">10 posts</Typography>
      </div>
      <div>
        <PostFeed />
      </div>
    </Card>
  );
}
