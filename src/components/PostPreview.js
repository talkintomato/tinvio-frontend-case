import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    margin: 20,
    padding: 5,
    borderRadius: 20,
    maxHeight: 200,
  },
});

const PostPreview = forwardRef(({ title, body }, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={ref}>
      <div>
        <h3> {title} </h3>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
});

export default PostPreview;
