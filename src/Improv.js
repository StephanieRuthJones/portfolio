import React from 'react'
import './images/improv.jpg'
import './App.css'

const WebDevProj = (props) => {
    return (

        <div className="card">
            <img className="card-img-top" alt="Card image cap" src={require('./images/improv.jpg')} />
            <div className="card-body">
                <h4 className="card-title">Shows</h4>
                <h5 className="card-text">

                    <li className="link"><a href="https://voodoocomedy.com/event/barkleys-friday-night-improv-jam/?instance_id=1540652">Barkley, Denver, CO ~ 2017-Present</a></li>
                    <li className="link"><a href="https://voodoocomedy.com/event/makeshift-shakespeare-improvised-shakespeare-17/?instance_id=1564897">Makeshift Shakespeare, Denver, CO ~ 2017-Present</a></li>
                    <li className="link"><a href="https://www.improvisedjaneausten.com/">Improvised Jane Austen, Chicago, IL ~ 2013-2017</a></li>
                    <li className="link"><a href="https://www.ioimprov.com/">Various iO Theater House Teams, Chicago, IL ~ 2013-2017</a></li>

                </h5>
                <img
                />


            </div>
        </div >



    )
}

export default WebDevProj