import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import inst1 from "../images/inst1.png";
import inst2 from "../images/inst2.png";
import tt1 from "../images/tt1.png";
import tt2 from "../images/tt2.png";
import tel1 from "../images/tel1.png";
import tel2 from "../images/tel2.png";
import vk1 from "../images/vk1.png";
import vk2 from "../images/vk2.png";

const useStyles = makeStyles((theme) => ({
  flexFooter: {
    marginTop: "16px",
  },
  mainTxt: {
    color: "whitesmoke",
    fontSize: "12px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
  },
  iconInst: {
    display: "block",
    marginLeft: "32px",
    marginRight: "16px",
    width: "20px",
    height: "20px",
    textDecoration: "none",
    backgroundPosition: "center",
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${inst1})`,
    "&:hover": {
      transition: "0.8s",
      backgroundImage: `url(${inst2})`,
    },
  },
  iconVK: {
    display: "block",
    marginRight: "16px",
    width: "20px",
    height: "20px",
    textDecoration: "none",
    backgroundPosition: "center",
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${vk1})`,
    "&:hover": {
      transition: "0.8s",
      backgroundImage: `url(${vk2})`,
    },
  },
  iconTel: {
    display: "block",
    marginRight: "16px",
    width: "20px",
    height: "20px",
    textDecoration: "none",
    backgroundPosition: "center",
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${tel1})`,
    "&:hover": {
      transition: "0.8s",
      backgroundImage: `url(${tel2})`,
    },
  },
  iconTT: {
    display: "block",
    marginRight: "32px",
    width: "20px",
    height: "20px",
    textDecoration: "none",
    backgroundPosition: "center",
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${tt1})`,
    "&:hover": {
      transition: "0.8s",
      backgroundImage: `url(${tt2})`,
    },
  },
  flexRightsSS: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backGradient: {
    background: "linear-gradient(270deg, transparent, whitesmoke, transparent)",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexFooter}>
        <div className={classes.flexRightsSS}>
          <div className={classes.mainTxt}>
            &copy; All Rights Reserved, Dmitriy Yarchuck corp.
          </div>
          <div className={classes.backGradient}>
            <ul className={classes.socialIcons}>
              <li className={classes.liStyle}>
                <a
                  className={classes.iconInst}
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                ></a>
              </li>
              <li className={classes.liStyle}>
                <a
                  className={classes.iconVK}
                  href="https://vk.com"
                  title="Vk"
                  target="_blank"
                ></a>
              </li>
              <li className={classes.liStyle}>
                <a
                  className={classes.iconTel}
                  href="https://телеграм.онлайн/"
                  title="Telegram"
                  target="_blank"
                ></a>
              </li>
              <li className={classes.liStyle}>
                <a
                  className={classes.iconTT}
                  href="https://www.tiktok.com/"
                  title="Tik-Tok"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
