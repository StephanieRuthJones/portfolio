import React, { Component } from 'react';
import Name from './Name'
import Bio from './Bio'
import Biopic from './BioPic'
import ProjectsButton from './ProjectsButton'
import WebDevProj from './WebDevProj'
import ImprovButton from './ImprovButton'
import Improv from './Improv'
import OnCameraButton from './OnCameraButton'
import OnCamera from './OnCamera'
// import "node_modules/video-react/dist/video-react.css"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: true,
      projects: false,
      improv: false,
      onCamera: false
    }
  }

  bioButton = () => {
    this.setState({
      bio: !this.state.bio
    })
  }

  projectsButton = () => {
    this.setState({
      projects: !this.state.projects
    })
  }

  improvButton = () => {
    console.log("clicked improv")
    this.setState({
      improv: !this.state.improv
    })
  }

  onCameraButton = () => {
    console.log("clicked on cam")
    this.setState({
      onCamera: !this.state.onCamera
    })
  }

  render() {
    return (
      <div className="App container">
        <div className="left-element">
          <div>
            <Name />
          </div>

          <Biopic />

          <div className="buttons row justify-content-center">

            <ProjectsButton
              projectsButton={this.projectsButton} />

            <ImprovButton
              improvButton={this.improvButton} />

            <OnCameraButton
              onCameraButton={this.onCameraButton} />
          </div>
          <div className="row justify-content-center">
            {this.state.projects === true ? <WebDevProj /> : null}
            {this.state.improv === true ? <Improv /> : null}
            {this.state.onCamera === true ? <OnCamera /> : null}
          </div>


        </div>
      </div>
    );
  }
}

export default App;
