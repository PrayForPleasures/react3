import Header from "./components/header";
import Sections from "./components/sections";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import backImage from "./images/backPhoto.jpg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backImg: {
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.backImg}>
        <Container>
          <Header></Header>
          <Sections></Sections>
        </Container>
      </div>
    </Router>
  );
}

export default App;
