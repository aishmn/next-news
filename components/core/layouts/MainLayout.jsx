import { Container } from "react-bootstrap";
import Header from "../header/Header";
import Alert from "../../alert/Alert";

const MainLayout = (props) => (
  <>
    <Alert />
    <Header />
    <Container fluid>{props.children}</Container>
  </>
);

export default MainLayout;
