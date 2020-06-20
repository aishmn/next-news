import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/#" justiy-content-center="true">
          <i className="fa fa-snowflake-o fa-lg p-1" aria-hidden="true"></i>

          <span style={{ fontSize: "25px" }}>
            <span className="text-alert">
              <u>nexy</u>
            </span>
            <span className="text-warning">
              <u>times</u>
            </span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#">
              <i class="fa fa-home px-1" aria-hidden="true"></i>
              Home
            </Nav.Link>
            <Nav.Link href="/#">
              <i className="fa fa-info-circle px-1" aria-hidden="true"></i>
              About
            </Nav.Link>
            <Nav.Link>
              <Link href="/admin">
                <a className="text-light">
                  <i className="fa fa-tachometer px-1" aria-hidden="true"></i>
                  Admin
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
