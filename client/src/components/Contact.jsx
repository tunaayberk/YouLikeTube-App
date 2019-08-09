import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


function Contact() {
  return (
    <ProductWrapper className="col-9 mx-auto my-5">
      <CardGroup>
        <Card text="white" bg="dark" className="mr-2">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Bora Sumer</Card.Title>
            <Card.Text>
              <span>Phone: 705 500 6918</span><br />
              <span>Address: 220 Burnhamthorpe Road West Mississauga On</span><br />
              <a href="mailto: borasumer@outlook.com">borasumer@outlook.com</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a target="_blank" href={'http://www.borasumer.com'}>www.borasumer.com</a>

          </Card.Footer>
        </Card>

        <Card text="white" bg="dark" className="mr-2">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Orkun Ozgiray</Card.Title>
            <Card.Text>
              <span>Phone: 705 500 6918</span><br />
              <span>Address: 242 Penetanguishene Road Barrie  ON</span><br />
              <a href="mailto: orkunozgiray@gmail.com">orkunozgiray@gmail.com</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a target="_blank" href={'http://orkunozgiray.com'}>www.orkunozgiray.com</a>
          </Card.Footer>
        </Card>

        <Card text="white" bg="dark" className="mr-2">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Ozan Muldur</Card.Title>
            <Card.Text>
              <span>Phone: 705 791 7718</span><br />
              <span>Address: 106 Wendell Ave. North York ON</span><br />
              <a href="mailto: muldurozan@gmail.com">muldurozan@gmail.com</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a target="_blank" href={'https://www.ozanmuldur.com'}>www.ozanmuldur.com</a>

          </Card.Footer>
        </Card>

        <Card text="white" bg="dark">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Tuna Ayberk Ozmen</Card.Title>
            <Card.Text>
              <span>Phone: 705 500 6918 </span><br />
              <span>Address: 58 Brighton Rd., Barrie, ON L4M 6S4</span><br />
              <a href="mailto: tunaayberk@hotmail.com">tunaayberk@hotmail.com</a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a target="_blank" href={'https://www.tunaayberk.com'}>www.tunaayberk.com</a>
          </Card.Footer>
        </Card>
      </CardGroup>
    </ProductWrapper>
  )
}

export default Contact;

//! Styled Elements
const ProductWrapper = styled.div`
  .card {
    margin-top:5rem;
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }`