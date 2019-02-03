import React from 'react'
import './App.css'

const ImprovButton = (props) => {
    return (
        <div className="mr-5">
            <button
                className="btn btn-default"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={props.improvButton} >
                Improv
            </button>
        </div >
    )
}

export default ImprovButton