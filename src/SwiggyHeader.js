import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {SiSwiggy} from "react-icons/si";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import {BiHelpCircle, BiSolidOffer} from "react-icons/bi";
import {BsPersonCircle} from "react-icons/bs";
function SwiggyHeader() {
  return (
    <header>
      <Navbar bg="orange" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><SiSwiggy size='3rem'color='orange'/></Navbar.Brand>
          <Nav className="d-flex justify-content-center">
            <Nav.Link href="#home"><AiOutlineSearch/>search</Nav.Link>
            <Nav.Link href="#offers"><BiSolidOffer/> offers</Nav.Link>
            <Nav.Link href="#help"><BiHelpCircle size='1rem'/> help</Nav.Link>
            <Nav.Link href="#sign in"><BsPersonCircle/> signin </Nav.Link>
            <Nav.Link href="#cart">cart <AiOutlineShoppingCart/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
  );
}

export default SwiggyHeader;