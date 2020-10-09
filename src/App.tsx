import React from 'react';
import './App.css';
import { MDBContainer, MDBRow } from 'mdbreact';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import { Switch, Route } from 'react-router-dom';
import PDF from './PDF/PDF';

function App() {
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
