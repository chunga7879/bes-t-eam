import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateProject from "./page/CreateProject";

// TODO: ANY needs to be changed => DATA TYPE DEFINE submodule needed

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          {/*<Header />*/}
          <Routes>
            <Route path="/project" element={<CreateProject />} />
            {/*<Route path="/education" element={<Education />} />*/}
            {/*<Route path="/projects/:page" element={<Project />} />*/}
            {/*<Route path="/experience" element={<Experience />} />*/}
            {/*<Route path="/documents" element={<Document />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
