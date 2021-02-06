import React, { useState, useEffect } from "react";
import db from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CoverImg from "../assets/coverImg.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneImg from "../assets/icon-24-phone.svg";
import CategoryImg from "../assets/category.png";
import ShopImg from "../assets/icon-24-shop.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: 30,
    flex: 0.5,
    minWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileCard({ name, phone, bs, address }) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc("1")
      .onSnapshot((snapshot) => setUsers(snapshot.data()));
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={CoverImg} />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {users.name}'s Post
          </Typography>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Avatar src={PhoneImg} />
                  </ListItemIcon>
                  <ListItemText primary={users.phone} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Avatar src={CategoryImg} />
                  </ListItemIcon>
                  <ListItemText primary={users.company.bs} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Avatar src={ShopImg} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      users.address.street +
                      ", " +
                      users.address.suite +
                      ", " +
                      users.address.city +
                      ", " +
                      users.address.zipcode
                    }
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
