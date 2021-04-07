import React from 'react';
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn, } from 'mdbreact';
import test from '../assets/me.jpg';
// import tesla from '../assets/model-3-hero-desktop-v2.jpg';
import myTesla from '../assets/myTesla.png';

const ProjectsPage = () => {
  
  return (
    <section className="text-center my-1 mt-1">
      <h2 className="h1-responsive font-weight-bold my-2">Devin Tyler Cunningham</h2>
      <p className="grey-text w-responsive mx-auto mb-3">Seattle based Software Development Engineer. Frenchie Dad. Car Enthusiast.</p>

      <MDBContainer className="d-flex flex-wrap">
        <MDBCol md="12" className="mb-4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage      : `url(${myTesla})`,
              backgroundSize       : '100%',
              backgroundRepeat     : 'no-repeat',
              backgroundAttachment : 'absolute',
              backgroundPosition   : 'center -10px',
              background: "linear-gradient(to bottom,  0%,rgba(125,185,232,0) 100%)",
              filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#007db9e8',GradientType=0 )"
              // filter: 'grayscale(100%)',
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded" style={{minHeight:"360px"}}>
              <div style={{minWidth:"100%"}}>
                <h6 className="purple-text">
                  <MDBIcon icon="car" />
                  <strong> Passion Project</strong>
                </h6>
                <h3 className="py-3 font-weight-bold">
                  <strong>myTesla</strong>
                </h3>
                <p className="pb-3" style={{whiteSpace:"pre-wrap"}}>
                  A multi-microservice application that gathers data from your Tesla and displays aggregate information like drive and charge sessions to a dashboard.
                  <br/>
                Languages & Tools: JavaScript/TypeScript, NodeJS, MongoDB, Docker, Tesla’s API
                </p>
                  <MDBBtn gradient="purple" rounded href="https://gitfront.io/r/user-3789929/7c5e825df350ac32d7eb886ba90ba7e31c458218/myTesla/" target="_blank">
                    <MDBIcon far icon="clone" className="left" /> view source code
                  </MDBBtn>
                <MDBBtn gradient="purple" rounded href="https://mytesla.devincunningham.com/logout?redirect=https%3A%2F%2Fmytesla.devincunningham.com%2Flogin%3Fusername%3Ddemo%26pwd%3D%5ER%5ETmZam9WYN92gMvj8uAd!9*38X%5E9E%25TCr%40%26submit%3Dy" target="_blank">
                  <MDBIcon far icon="clone" className="right" /> view project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)',
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded" style={{minHeight:"406px"}}>
              <div>
                <h6 className="blue-text">
                  <MDBIcon far icon="file-alt" />
                  <strong> Career</strong>
                </h6>
                <h3 className="py-3 font-weight-bold">
                  <strong>Professional Summary</strong>
                </h3>
                <p className="pb-3">
                  Software developer skilled in building and deploying containerized full-stack web applications, collaborating with teams, and delivering a top notch final product. Has a background in marketing and graphic design, and understands how to both develop and communicate a product’s value.
                </p>
                <MDBBtn gradient="blue" rounded href="/resume" target="_blank">
                  <MDBIcon far icon="clone" className="left" /> View Resume
                </MDBBtn>
                <MDBBtn gradient="blue" rounded href="https://www.linkedin.com/in/devincunningham/" target="_blank">
                  <MDBIcon far icon="clone" className="left" /> View LinkedIn
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" className="md-0 mb-4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage      : `url(${test})`,
              backgroundSize       : '600px',
              backgroundRepeat     : 'no-repeat',
              backgroundAttachment : 'absolute',
              backgroundPosition   : 'center center',
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded" style={{minHeight:"406px"}}>
              <div>
                <h6 className="green-text">
                  <MDBIcon icon="male" />
                  <strong> Me</strong>
                </h6>
                <h3 className="py-3 font-weight-bold">
                  <strong>About Devin</strong>
                </h3>
                <p className="pb-3">
                  Born and raised in Issaquah Washington. I love to snowboard, workout, and hike with my 44lbs French Bulldog. Fun fact, I ate Chipotle for 425 days straight and was feature on <a href={"https://time.com/4417999/fit-guy-eats-chipotle-every-day/"} target="_blank" rel="noopener noreferrer">Time.com</a>
                </p>
                {/* <MDBBtn gradient="aqua" rounded>
                  <MDBIcon far icon="clone" className="left" /> Stitch's Instagram
                </MDBBtn> */}
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    </section>
  );
};

export default ProjectsPage;
