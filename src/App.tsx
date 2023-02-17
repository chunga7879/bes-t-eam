import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateProject from "./page/CreateProject";
import ProjectList from "./page/ProjectList";
import Project from "./page/Project";
import CreateSurveyProject from "./page/CreateSruveyProject";
import SurveyList from "./page/SurveyList";
import SurveyParticipant from "./page/SurveyParticipant";

// TODO: ANY needs to be changed => DATA TYPE DEFINE submodule needed
// TODO: NEED TO CHANGE THE PATH BY MAKING PLACE TO MANAGE FOR PATH
// TOOD: MANAGE TYPE OF RESPONSE
// need to make seperate route for each main things (ex. group project things)

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          {/*<Header />*/}
          <Routes>
              {/*projects*/}
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects/:id" element={<Project />} />

              {/*survey*/}
            <Route path="/survey/create/project/:projectId" element={<CreateSurveyProject />} />
            <Route path="/survey/project/:projectId" element={<SurveyList />} />

            <Route path="/survey/participant/create/survey/:surveyId" element={<SurveyParticipant />}/>

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
