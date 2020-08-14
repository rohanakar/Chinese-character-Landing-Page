import React from 'react';
import './Landing.css';
import ButtonLogo from '../../assets/go.svg'
import {animate,getTextWidth} from '../../utils/util';
import { useSelector } from 'react-redux';

        

    const Landing = () => {

        const { width,fontLoaded } = useSelector(state => state.screenReducer);
        var fontH = fontLoaded?'CodyStar':'Roboto'; 
        var fontS = fontLoaded?'Joslyn-slab':'Roboto'; 

        var widthHeading = getTextWidth(fontH,0.9*width,"Chinese Character",10);
        var widthsubHeading = getTextWidth(fontS,0.45*width,"Innovative way to learn chinese",10,1);
        return (
            <div className="content">
                <div className="text">
                    <div className="heading" style={{fontFamily:fontH,fontSize: widthHeading-2+'px'}}>
                        Chinese Character
                   
                    </div>
                    <div className="subheading" style={{fontFamily:fontS,fontSize: widthsubHeading+'px'}}>
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

    export default Landing;