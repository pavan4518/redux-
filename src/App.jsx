import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Componets/Header";
import Display from "./Componets/Display";
import Container from "./Componets/Container";
import Controls from "./Componets/Controls";
import { useSelector } from "react-redux";
import PrivacyMess from "./Componets/PrivacyMess";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMess /> : <Display />}
          <Controls></Controls>
        </div>
      </Container>
    </center>
  );
}

export default App;
