import Header from "./components/header";
import Sections from "./components/sections";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import backImage from "./images/backPhoto.jpg";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div style={{ backgroundImage: `url(${backImage})` }}>
      <Container>
        <Header></Header>
        <Sections></Sections>
      </Container>
    </div>
  );
}

export default App;
