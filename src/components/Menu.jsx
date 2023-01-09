import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import style from "../index.css";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootMenu: {
    marginBottom: "8px",
  },
  navMain: {
    display: "flex",
    justifyContent: "space-around",
  },
  navStyle: {
    padding: "6px 12px",
    whiteSpace: "nowrap",
    outline: "2px solid transparent",
    border: "3px solid whitesmoke",

    animation: "myBorder 10s ease-in-out infinite",
    color: "whitesmoke",
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.rootMenu}>
      <ul className={classes.navMain}>
        <li className={classes.navStyle}>
          <Typography>Заказать звонок</Typography>
        </li>
        <li className={classes.navStyle}>
          <Typography>Галерея</Typography>
        </li>
        <li className={classes.navStyle}>
          <Typography>Наши мастера</Typography>
        </li>
        <li className={classes.navStyle}>
          <Typography>Отзывы</Typography>
        </li>
        <li className={classes.navStyle}>
          <Typography>Мы находимся</Typography>
        </li>
      </ul>
    </div>
  );
}
