import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import PostFeed from "./PostFeed.js";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: 15,
    overflowY: "scroll",
    [theme.breakpoints.up("sm")]: {
      flex: 0.5,
      minWidth: 400,
      height: 500,
    },
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    padding: 22,
    background: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
}));

export default function PostsCard({ name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>{name}'s Posts</Typography>
      </div>
      <div>
        <PostFeed />
      </div>
    </Card>
  );
}
