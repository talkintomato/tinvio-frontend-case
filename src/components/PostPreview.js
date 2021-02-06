import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    margin: 20,
    borderRadius: 20,
    maxHeight: 200,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
});

const PostPreview = forwardRef(({ title, body }, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={ref}>
      <div>
        <Typography className={classes.title}> {title} </Typography>
      </div>
      <div>
        <Typography className={classes.body}> {body} </Typography>
      </div>
    </div>
  );
});

export default PostPreview;
