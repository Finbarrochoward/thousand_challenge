import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Header.module.css'
import LangSwitcher from './LangSwitcher';


function Header() {

    return (
        <>
            <div className={styles.fixedTop}>
                <Navbar /*</>fixed="top"*/ collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">TC</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Login</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Sign Up
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <LangSwitcher styles={styles} />
            </div>

        </>
    );
}

export default Header;