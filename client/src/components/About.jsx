import React from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function About() {
  return (
    <React.Fragment>
      <div className="container">
        <Jumbotron>
          <h1>About Bora Sumer</h1>
          <p>
            Hi, this is Bora, and I am a Computer Programmer student for 2 years at Georgian College and have a lot of experience with web development tools and languages such as HTML5, CSS3, PHP, Bootstrap, jQuery, JavaScript, NodeJS, ExpressJS, MongoDB, ReactJS, you can see my website to check my portfolio.
        </p>
          <p>
            <Link to="/contact">
              <Button variant="danger">Contact me !</Button>
            </Link>
          </p>
        </Jumbotron>
        <Jumbotron>
          <h1>About Orkun Ozgiray</h1>
          <p>
            My name is Orkun Ozgiray.I was born and raised in Istanbul, Turkey. After I graduated from university as an Electronic Engineer, I have decided to move to Canada to become a Web Developer as well and enrolled to a 2 year program in Georgian College.
        </p>
          <p>
            <Link to="/contact">
              <Button variant="danger">Contact me !</Button>
            </Link>
          </p>
        </Jumbotron>
        <Jumbotron>
          <h1>About Ozan Muldur</h1>
          <p>
            Recently, I created several web applications with one of the trending frameworks, react. During creating those projects, I did not stick with the same methodologies. Thus, this caused me to work with as many libraries and frameworks as I can.
        </p>
          <p>
            <Link to="/contact">
              <Button variant="danger">Contact me !</Button>
            </Link>
          </p>
        </Jumbotron>
        <Jumbotron>
          <h1>About Tuna Ayberk Ozmen</h1>
          <p>
            Functional Programming Enthusiastic.
            I have been working for the digital advertising industry since 2010. I started this adventure with Graphic Design and worked for more than 50 customers with various design and development works.
            I have been working with PHP, JavaScript, HTML & CSS.
            I have been focusing on Full-stack Development and optimizations.
            Libraries & Environments: Node.js, Express.js, React.js, Redux, Webpack, Tensorflow.js
        </p>
          <p>
            <Link to="/contact">
              <Button variant="danger">Contact me !</Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    </React.Fragment>
  )
}

export default About;
