import React from 'react'
import './App.css'

const Biopic = (props) => {
    return (
        <div className="pic-container">
            <div className="bio-pic justify-content-center">
                <img className="rounded-circle" style={{ width: 130, height: 130, border: '2px solid #e9e7e9' }} src={require('./StephaniePic.jpg')} />
            </div>
            <div className="bio justify-content-center">
                <h3 className="bio-text">Passionate, motivated full-stack web developer.</h3>
                <h3 className="bio-text">Continuous learner. Analytical thinker. </h3>
                <h3 className="bio-text">Improvisational comedian. Occasional on-camera actor.</h3>
                <h3 className="bio-text">Do-it-yourself archeologist.</h3>
            </div>
        </div>
    )
}

export default Biopic