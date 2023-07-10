import Carousel from 'react-bootstrap/Carousel';

function SwiggyCarousels() {
  return (
    <Carousel>
      <Carousel.Item className='m-1'>
        <img
          className="d-block w-100 "
          src="images/swiggyimage1.jpg"
          alt="First slide"
          height="350"
        />
        <Carousel.Caption>
          <h3>Grab 50% Off & Free Delivery</h3>
          <p>Welcoming you with your favourite delicacies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/swiggyImage2.jpg"
          alt="Second slide"
          height="350"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/swiggyimage3.jpg"
          alt="Third slide"
          height="350"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SwiggyCarousels;
        
   