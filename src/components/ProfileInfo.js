import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CategoryImg from "../assets/category.png";
import ShopImg from "../assets/icon-24-shop.svg";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import PhoneIcon from "@material-ui/icons/LocalPhoneOutlined";
import { makeStyles } from "@material-ui/core/styles";
// import PhoneImg from "../assets/icon-24-phone.svg";
// Phone image file was corrupted so I replaced it with a material UI icon

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
  },
  body: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

// List of user information with icons
export default function ProfileInfo({ phone, bs, address, name }) {
  const classes = useStyles();
  return (
    <CardContent>
      <Typography className={classes.title}>{name}</Typography>
      <Grid>
        <div>
          <List>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon style={{ fontSize: 35 }} />
              </ListItemIcon>
              <Typography className={classes.body}>{phone}</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Avatar src={CategoryImg} />
              </ListItemIcon>
              <Typography className={classes.body}> {bs} </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Avatar src={ShopImg} />
              </ListItemIcon>
              <Typography className={classes.body}> {address} </Typography>
            </ListItem>
          </List>
        </div>
      </Grid>
    </CardContent>
  );
}
