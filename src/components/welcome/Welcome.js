import React from 'react'
import {Animated} from "react-animated-css";
import './Welcome.css'

import Login from '../login/Login'

class Welcome extends React.Component {

    render() {
     
        return (

            <div>
                <nav className="navbar navbar-light bg-banpais" id="navBadNoLogged">
                    { <span className="navbar-brand font-weight-bold">Evaluaciones</span> }
                </nav>

                <div className="container" >
                                  
                    <div className="row" id="loginMargin">
                        <div className="col mt-n4 text-center slide-bottom">                  
                            
                            <div className="d-inline">
                                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                                    <div>
                                        <h1 className="d-inline display-2 font-weight-bold">Evaluaciones </h1>
                                    </div>
                                </Animated>
                                
                                <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                                    <div>
                                        <h1 className="d-inline font-weight-bold font-italic ">BP</h1>
                                    </div>
                                </Animated>
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-center mb-4 slide-bottom">
                        <Login className="slide-bottom" /> 
                    </div>
                </div>

            </div>
        )
        
    }

}


export default Welcome