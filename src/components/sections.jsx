import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Slider from "./slider";
import Description from "./Description";
import img1 from "../images/ph1.jpg";
import img2 from "../images/ph2.jpg";
import img3 from "../images/ph7.jpg";
import img4 from "../images/ph4.jpg";
import img6 from "../images/ph6.jpg";
import img7 from "../images/ph16.jpg";
import img8 from "../images/10.jpg";
import img9 from "../images/ph19.jpg";
import img10 from "../images/ph21.jpg";
import img11 from "../images/ph22.jpg";
import img12 from "../images/ph23.jpg";
import img13 from "../images/ph14.jpg";
import img14 from "../images/ph15.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(0.1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    border: "2px solid #222222",
    backgroundColor: "whitesmoke",
    boxShadow: "8px 8px 13px #000000",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
    },
  },
  paper2: {
    position: "relative",
    padding: theme.spacing(0.1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    boxShadow: "8px 8px 13px #000000",
    height: "98.2%",
    backgroundColor: "whitesmoke",
    border: "2px solid #222222",
  },
  typoStyle: {
    color: "whitesmoke",
    fontFamily: "East Sea Dokdo",
    fontSize: "28px",
    marginBottom: "0",
  },
  typoStyle2: {
    color: "whitesmoke",
    textAlign: "center",
    margin: "20px 0px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "3px",
    filter: "grayscale(50%)",
    "&:hover": {
      transition: "0.3s",
      filter: "grayscale(0)",
    },
  },
  spanStyle: {
    fontWeight: "bold",
  },
  firstSection: { marginTop: "8px" },
  secondSection: {
    marginTop: "24px",
  },
}));

export default function Sections() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.firstSection} container spacing={3}>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img1}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img2}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img3}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img4}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card className={classes.paper2}>
            <Slider></Slider>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1" className={classes.typoStyle2}>
            <span className={classes.spanStyle}>
              ????????-?????????? ??<span className={classes.typoStyle}>RWD Tattoo</span>??
              ???????????????????????? ??????????!
            </span>
            <br />?? ?????? ???????????????? ?????????????????? ?????????????????????????? ?? ?????????????????? ???????????? ??
            ???????????????????? ???????????????? ?? ????????????, ?????????????? ???? ??????????????????
            ????????????????????????????????????????????, ???????????????? ?? ?????????????????? ????????-???????????????????? ??
            ????????????????????, ?????????????? ????????????-???????????? ?? ???????????????????? ?????????????????? ??????????.
          </Typography>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img6}></CardMedia>
          </Card>
        </Grid>
      </Grid>
      <Description></Description>
      <Grid className={classes.secondSection} container spacing={3}>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img7}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img8}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img9}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img10}></CardMedia>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img11}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img12}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img13}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img14}></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
