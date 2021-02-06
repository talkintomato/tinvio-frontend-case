import ProfileCard from "./ProfileCard";
import PostsCard from "./PostsCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProfileCard />
      <PostsCard />
    </div>
  );
}

export default App;
