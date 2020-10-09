import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import test  from '../assets/me.jpg';
import tesla from '../assets/model-3-hero-desktop-v2.jpg';

const ProjectsPage = () => {
  return (
  <section className="text-center my-1">
    <h2 className="h1-responsive font-weight-bold my-2">
      Devin Tyler Cunningham
    </h2>
    <p className="grey-text w-responsive mx-auto mb-5">
      Seattle based Software Development Engineer.
      Frenchie Dad.
      Car Enthusiast.
    </p>

    <MDBContainer className="d-flex flex-wrap">
      <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  `url(${tesla})`,
                  backgroundSize: '1290px',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'absolute',
                  backgroundPosition: 'center center',
                  // filter: 'grayscale(100%)',
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="purple-text">
                <MDBIcon icon="car" />
                <strong> Passion Project</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>myTesla</strong>
              </h3>
              <p className="pb-3">
                Multi-service web-app that Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem molestias recusandae harum sunt impedit dolor est. Officia dicta ea eaque ab neque libero aliquid! Nihil illo dignissimos eveniet voluptate.
              </p>
              <MDBBtn gradient="purple" rounded href="https://github.com/DevinTyler26/myTesla" target="_blank">
                <MDBIcon far icon="clone" className="left" /> view source code
              </MDBBtn>
              <MDBBtn gradient="purple" rounded href="https://mytesla.devincunningham.com" target="_blank">
                <MDBIcon far icon="clone" className="right" /> view project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="blue-text">
              <MDBIcon far icon="file-alt" />
                <strong> Professional</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>This is card title</strong>
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio
                nam sit officia accusamus minus error nisi architecto
                nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn gradient="blue" rounded>
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
        <MDBCard className="card-image" style={{
                backgroundImage     : `url(${test})`,
                backgroundSize      : '600px',
                backgroundRepeat    : 'no-repeat',
                backgroundAttachment: 'absolute',
                backgroundPosition  : 'center center',
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="green-text">
                <MDBIcon icon="male" />
                <strong> Me</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>About Devin</strong>
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio
                nam sit officia accusamus minus error nisi architecto
                nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn gradient="aqua" rounded>
                <MDBIcon far icon="clone" className="left" /> placeholder
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  </section>
  );
}

export default ProjectsPage;