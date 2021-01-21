import React from 'react';
import './App.css';
import { Navbar, Nav, Card, Button, Container, Row, Col, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="#home" style={{ fontWeight: 400, fontSize: 25, marginLeft: 40 }}>GURA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav style={{ fontWeight: 600, fontSize: 18, marginRight: 40 }}>
              <Nav.Link>Discover</Nav.Link>
              <Nav.Link>Teach on Gura</Nav.Link>
              <Nav.Link>Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Log In
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <img src='https://img.techpowerup.org/201114/petplate-2-1778x800-1.jpg' alt=''
          style={{ width: 1280, flexWrap: 'nowrap' }}
        />
        <div style={{ marginTop: '-30rem', marginLeft: '5rem' }}>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Full Stack Entrepreneurship</Card.Title>
              <Card.Text>
                Join Renaldo live as he talks about the skills you need to be a Full Stack Entrepreneur, his path from Shark Tank, and beyond.
              </Card.Text>
              <Card.Text style={{ fontWeight: 700 }}>
                $39.99
              </Card.Text>
            </Card.Body>
            <Button style={{ maxWidth: '10rem', marginLeft: '5rem', marginBottom: 5, backgroundColor: '#000000' }}>Buy now</Button>
          </Card>
        </div>
      </div>

      <div style={{ marginTop: '17rem', marginLeft: '5rem' }}>
        <h3>Live classes from home</h3>
        Watch live online classes from peers & experts across various topics
      </div>

      <div style={{ marginTop: '4rem' }}>
        <Container>
          <h3>Featured live sessions</h3>
          <Row>
            <Col xs={{ order: 'last' }}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-7.d07c06e2.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Marketing with Zero Budget</Card.Title>
                  <Card.Text>
                    Alexa Smith
                    <h6>$19.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-6.1fc87047.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Validating Customer Feedback</Card.Title>
                  <Card.Text>
                    Jessica Green
                    <h6>$123.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 'first' }}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-marketing.4dc37fcd.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Using Optimizely to A/B Test</Card.Title>
                  <Card.Text>
                    Michelle Chan
                    <h6>$14.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 'last' }}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-8.812d0904.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Email Marketing with Customers</Card.Title>
                  <Card.Text>
                    Tina Jones
                    <h6>$21.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <Container>
          <hr />
          <Row style={{ display: 'flex', margin: 30, textAlign: 'center' }}>
            <Col xs>
              <img src='https://beta.gura.io/static/media/star-brust.a5affc17.svg' alt='' />
              <h6>Buy premium classes to learn about topics</h6>
              All pay as you go. No commitments.
            </Col>
            <Col xs>
              <img src='https://beta.gura.io/static/media/rocket.55f4d623.svg' alt='' />
              <h6>Learn from industry experts, and peers with more experience</h6>
              Discover the most relevant video sessions.
            </Col>
            <Col xs>
              <img src='https://beta.gura.io/static/media/thunder-in-box.a75f6b7e.svg' alt='' />
              <h6>Supercharge your learning with new insights & connections</h6>
              Classroom & webinar style.
            </Col>
          </Row>
          <hr />
        </Container>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <Container>
          <h3>Today's live sessions</h3>
          <Row>
            <Col xs={{ order: 'last' }}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-2.de536f30.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Marketing with Zero Budget</Card.Title>
                  <Card.Text>
                    Alexa Smith
                    <h6>$19.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-1.f557f0b1.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Validating Customer Feedback</Card.Title>
                  <Card.Text>
                    Jessica Green
                    <h6>$123.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 'first' }}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-marketing.4dc37fcd.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Using Optimizely to A/B Test</Card.Title>
                  <Card.Text>
                    Michelle Chan
                    <h6>$14.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 'last' }}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://beta.gura.io/static/media/Thumbnail-3.e7803b51.png" height='150px' />
                <Card.Body>
                  <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>Email Marketing with Customers</Card.Title>
                  <Card.Text>
                    Tina Jones
                    <h6>$21.99</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: '4rem', marginLeft: '5rem' }}>
        <Figure>
          <h3>Staff pick for you.</h3>
          <Figure.Image
            style={{ height: '330px', width: '500px', borderRadius: 8 }}
            src="https://beta.gura.io/static/media/staff-pick.51a5e00c.png"
          />
          <Figure.Caption style={{ color: '#000000', marginLeft: 520, marginTop: -260 }}>
            <h5>Using Jira to Manage your Sprints across your Product teams.</h5>
            I'm going to run through the ins and outs of setting up a Sprint in Jira, and the best approach to make sure you're dev team is performing at a high level.
            <h3>$29.99</h3>
            <Button style={{backgroundColor: '#000000'}}>Buy Now</Button>
          </Figure.Caption>
        </Figure>
      </div>

      <div style={{ marginTop: '8rem', marginLeft: '5rem' }}>
        <hr />
        <h4>Start teaching your class today</h4>
        Connect with fans, reach people across the world, and earn money
        <Button style={{marginLeft: 450, backgroundColor: '#000000'}}>Start Teaching</Button>
        <hr />
      </div>

      <div style={{ marginTop: '3rem', marginLeft: '5rem' }}>
        Terms<br />
        Privacy Policy<br />
        About Us<br />
        Contact Us<br />
        <h4 style={{marginTop: 30}}>GURA</h4>
        <div style={{marginTop: -160, marginLeft: 150}}>
          Blog<br />
          Help & Support<br />
          Featured Sessions
        </div>
      </div>

    </div>
  );
}

export default App;
