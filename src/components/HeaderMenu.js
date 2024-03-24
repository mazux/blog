import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import GithubLogo from "../svg/logo-github.svg";
import StackOverflowLogo from "../svg/logo-stackoverflow.svg";

function HeaderMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-light">
      <Container>
        <Navbar.Brand href="/">MAZEN Kenjrawi | DEV</Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="https://github.com/mazux" target="_blank" rel="noreferrer">
              <img src={GithubLogo} alt="Github" className="xs-logo mr-1" />
            </a>
            <a
              href="https://stackoverflow.com/users/3317006/mazux?tab=profile"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={StackOverflowLogo}
                alt="StackOverflow"
                className="xs-logo"
              />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
