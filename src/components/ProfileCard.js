import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CoverImg from "../assets/coverImg.jpg";
import Divider from "@material-ui/core/Divider";
import ProfileInfo from "./ProfileInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: 15,

    [theme.breakpoints.up("sm")]: {
      flex: 0.5,
      minWidth: 400,
      height: 500,
    },
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
}));

export default function ProfileCard({ phone, bs, address, name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={CoverImg} />
        <Divider />
        <ProfileInfo name={name} phone={phone} bs={bs} address={address} />
      </CardActionArea>
    </Card>
  );
}
