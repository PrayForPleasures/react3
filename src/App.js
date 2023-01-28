import Header from "./components/header";
import Sections from "./components/sections";
import Footer from "./components/Footer";
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
      <hr></hr>
      <div className={classes.backImg}>
        <Container>
          <Header></Header>
          <Sections></Sections>
        </Container>
        <hr style={{ marginTop: "24px" }}></hr>
        <Container>
          <Footer></Footer>
        </Container>
        <hr style={{ marginTop: "16px" }}></hr>
      </div>
    </Router>
  );
}

export default App;
