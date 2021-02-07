import React, { useState, useEffect } from "react";
import db from "../firebase";
import ProfileCard from "./ProfileCard";
import PostsCard from "./PostsCard";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  centered: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  // Get users from backend
  useEffect(() => {
    db.collection("users")
      .doc("1")
      .onSnapshot((snapshot) => setUsers(snapshot.data()));
  }, []);
  console.log(users);

  // if data not loaded display loading screen
  if (users.length < 1) {
    return (
      <div className={classes.centered}>
        <Loader />
        <h1> Loading... </h1>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <ProfileCard
        name={users.name}
        phone={users.phone}
        bs={users.company.bs}
        address={
          users.address.street +
          ", " +
          users.address.suite +
          ", " +
          users.address.city +
          ", " +
          users.address.zipcode
        }
      />
      <PostsCard name={users.name} />
    </div>
  );
}
