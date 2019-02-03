import React from 'react'
import Videos from './Videos'
import './App.css'

const OnCamera = (props) => {
    return (

        <div className="card">
            <img className="card-img-top" alt="Card image cap" src={require('./images/github.png')} />
            <div className="card-body">
                <h5 className="card-title">On-Camera Projects</h5>
                <div>
                    <Videos />
                </div>


            </div>
        </div>



    )
}

export default OnCamera