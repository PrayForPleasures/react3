import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img1 from "../images/ph1.jpg";
import img2 from "../images/ph2.jpg";
import img3 from "../images/ph7.jpg";
import img4 from "../images/ph4.jpg";
import img5 from "../images/ph5.jpg";
import img6 from "../images/ph6.jpg";

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
    boxShadow: "8px 8px 13px #000000",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
    },
  },
  paper2: {
    padding: theme.spacing(0.1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    border: "2px solid #222222",
    boxShadow: "8px 8px 13px #000000",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  typoStyle: {
    color: "whitesmoke",
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
}));

export default function Sections() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.typoStyle}
      >
        OUR WORKS:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img1}></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img2}>
              >
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img3}>
              >
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img4}>
              >
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card className={classes.paper2}>
            <CardMedia className={classes.media} image={img5}>
              >
            </CardMedia>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1" className={classes.typoStyle2}>
            <span className={classes.spanStyle}>
              Тату-салон «RWD Tattoo» осуществляет мечты!
            </span>
            <br />В нём трудятся настоящие профессионалы с авторским стилем и
            креативным подходом к работе, которые не перестают
            самосовершенствоваться, участвуя в ежегодных тату-конвенциях и
            фестивалях, посещая мастер-классы и зарубежные обучающие курсы.
          </Typography>
          <Card className={classes.paper}>
            <CardMedia className={classes.media} image={img6}>
              >
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.typoStyle}
      >
        CSS Grid Layout:
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 4" }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 8" }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
      </div>
    </div>
  );
}
