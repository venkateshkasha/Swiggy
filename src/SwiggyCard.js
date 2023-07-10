
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
function SwiggyCard() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/swiggyImage2.jpg" height="150px" />
              <Card.Body>
                <Card.Title>Paradise</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Quick View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/swiggyimage3.jpg" height="150px" />
              <Card.Body>
                <Card.Title>Dcabana</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Quick View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/swiggyimage4.jpg" height="150px" />
              <Card.Body>
                <Card.Title>Reboot</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Quick View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/swiggyImage2.jpg" height="150px" />
              <Card.Body>
                <Card.Title>Paradise</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Quick View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/swiggyimage3.jpg" height="150px" />
              <Card.Body>
                <Card.Title>Dcabana</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Quick View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/swiggyimage4.jpg" height="150px" />
              <Card.Body>
                <Card.Title>Reboot</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Quick View</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/swiggyImage2.jpg" height="150px" />
            <Card.Body>
              <Card.Title>Paradise</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Quick View</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/swiggyimage3.jpg" height="150px" />
            <Card.Body>
              <Card.Title>Dcabana</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Quick View</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     </div > 
  );
}

export default SwiggyCard;