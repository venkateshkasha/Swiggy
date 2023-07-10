import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import {SiSwiggy} from "react-icons/si";
import {AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare} from "react-icons/ai";
function SwiggyFooter (){
    return(
        <footer className="bg-dark text-light">
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>Company</h3>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Careers</li>

                        </ul>
                    </Col>
                    <Col md={6}>
                        <h3>Contact</h3>
                        <ul className="list-unstyled">
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>

                        </ul>
                    </Col>
                    <hr/>
                    <Col md={12}>
                        <div className="d-flex justify-content-evenly">
                    <p href="#home"><SiSwiggy size='3rem'color='white'/> SWIGGY</p>
                    <p href="#Instagram"><AiOutlineInstagram size='3rem'color='white'/> Instagram</p>
                    <p href="#Facebook"><AiOutlineFacebook size='3rem'color='white'/> Facebook</p>
                    <p href="#Twitter"><AiFillTwitterSquare size='3rem'color='white'/> Twitter</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default SwiggyFooter;