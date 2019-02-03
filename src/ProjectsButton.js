import React from 'react'
import './App.css'

const Projects = (props) => {
    return (
        <div className="mr-5">
            <button className="btn btn-default"
                onClick={props.projectsButton} >
                Web Development
            </button>
        </div >
    )
}

export default Projects