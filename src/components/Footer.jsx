import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flexFooter: {
    marginTop: "16px",
  },
  mainTxt: {
    color: "whitesmoke",
    fontSize: "12px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexFooter}>
        <div className={classes.mainTxt}>
          &copy; All Rights Reserved, Dmitriy Yarchuck corp.
        </div>
      </div>
    </>
  );
}
