import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    backgroundColor: "transparent",
    border: "2px solid whitesmoke",
    outline: "2px solid #222222",
    boxShadow: "8px 8px 13px #000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      transition: "0.8s",
      backgroundColor: "rgba(222, 222, 222, 0.2)",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: "whitesmoke",
  },
  title: {
    fontSize: 16,
    color: "whitesmoke",
    textAlign: "center",
    fontWeight: "bold",
  },
  title2: {
    fontSize: 14,
    color: "whitesmoke",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  buttonStyle: {
    color: "whitesmoke",
    fontSize: 12,
    border: "1px solid whitesmoke",
    backgroundColor: "#222222",
    textTransform: "capitalize",
    "&:hover": {
      transition: "0.8s",
      backgroundColor: "black",
      animation: "shake 0.5s infinite",
    },
  },
  flexCardsStyle: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "24px",
  },
}));

export default function Description() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.flexCardsStyle}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {bull}Качество татуировки!{bull}
          </Typography>
          <Typography className={classes.title2} gutterBottom>
            Только мастера с художественным образованием - эскиз любой
            сложности. Сделать татуировку вы сможете в этот же или в другой
            день.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.buttonStyle}>Подробнее</Button>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {bull}Консультация в салоне - бесплатная!{bull}
          </Typography>
          <Typography className={classes.title2} gutterBottom>
            Вы можете прийти в студию чтобы узнать конечную стоимость своей
            татуировки и познакомиться с мастером.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.buttonStyle}>Подробнее</Button>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {bull}Безопасность здоровья!{bull}
          </Typography>
          <Typography className={classes.title2} gutterBottom>
            Только одноразовые инструменты, абсолютно стерильное помещение +
            специалисты с медицинским образованием.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.buttonStyle}>Подробнее</Button>
        </CardActions>
      </Card>
    </div>
  );
}
