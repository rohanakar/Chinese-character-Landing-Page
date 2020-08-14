import React from 'react';
import './Home.css';
import ButtonLogo from '../assets/go.svg'
import {animate} from './animate.js'

class Home extends React.Component {

    render() {
        return (
            <div className="home-content">
                <div className="waste" style={{height:'17.5vh'}}></div>
                <div className="home-text">
                    <div className="home-heading">
                    Chinese character is a learning app for Chinese characters . There are more than 8000 characters which user can search and see the character's meaning, stroke order, related images with meaning, how it is pronounced . 

                    </div>
                    <div className="home-subheading">
                    <div style={{flex:1 , padding: '10px'}}> 
                    It also provides a progressive way to learn the characters for various HSK levels with an quiz for the characters which a user has seen so far .
                    </div>
                    <div style={{flex:1,textAlign:'center',display:'flex', padding: '10px'}} >
                    This project is the basis of a much higher level project which will have many more features .
                    </div>
                    </div>
                </div>
                <div className="home-subheading">
                <div className="home-button" onClick={()=>{animate('details-content')}}>
                        <span className="buttonText">UI Workflow</span>
                        <img className="buttonImage" src={ButtonLogo} width={35} alt="Logo" />
                </div>

                <div className="home-button">
                        <span className="buttonText">Implementation</span>
                        <img className="buttonImage" src={ButtonLogo} width={35} alt="Logo" />
                </div>
                </div>
                <div className="waste" style={{height:'9vh'}}></div>
            </div>
        )
    }
}
export default Home;