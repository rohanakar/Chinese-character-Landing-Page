import React from 'react';
import './Landing.css';
import ButtonLogo from '../assets/go.svg'
import {animate,getTextWidth} from './animate.js';

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      };
      componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    render() {

        var widthHeading = getTextWidth("CodyStar",0.9,"Chinese Character",0);
        var widthsubHeading = getTextWidth("CodyStar",0.45,"Chinese Character",10);
        return (
            <div className="content">
                <div className="text">
                    <div className="heading" style={{fontSize: widthHeading-2+'px'}}>
                        Chinese Character
                   
                    </div>
                    <div className="subheading" style={{fontSize: widthsubHeading+'px'}}>
                    Innovative way to learn chinese
                    </div>
                    <div className="button" onClick={() => animate('home-content')}>
                        <span className="buttonText">Know more</span>
                        <img className="buttonImage" src={ButtonLogo} width={35} alt="Logo" />
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Landing;