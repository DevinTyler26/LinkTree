import React from 'react';
import './App.css';
import { MDBContainer, MDBRow } from "mdbreact";
import ProjectsPage from './ProjectsPage/ProjectsPage';

function App() {
  return (
      <MDBContainer className="mt-5">
      <MDBRow className="mt-4 text-center">
        <ProjectsPage />
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
