import React from 'react';
import './App.css';
import { MDBContainer, MDBRow } from 'mdbreact';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import { Switch, Route } from 'react-router-dom';
import PDF from './PDF/PDF';

function App() {
  console.log("This is the process.env", process.env.PUBLIC_URL)
  return (
    <Switch>
      <Route exact path="/resume">
        <PDF />
      </Route>
      <Route exact path="/">
        <MDBContainer>
          <MDBRow className="text-center">
            <ProjectsPage />
          </MDBRow>
        </MDBContainer>
      </Route>
    </Switch>
  );
}

export default App;
