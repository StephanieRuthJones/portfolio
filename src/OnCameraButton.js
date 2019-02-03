import React from 'react'
import './App.css'

const OnCameraButton = (props) => {
    return (
        <div>
            <button
                className="btn btn-default"
                onClick={props.onCameraButton} >
                On-Camera
            </button>
        </div >
    )
}

export default OnCameraButton