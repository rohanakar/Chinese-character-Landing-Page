import React from 'react';
import './Improvement.css';
import { useSelector } from 'react-redux';
import { getTextWidth } from '../../utils/util';
import Icon from '../../assets/icon.svg';

const Improvement = () => {
    const { width } = useSelector(state => state.screenReducer);
    var widthHeading = getTextWidth("CodyStar", 0.6 * width, 'Improvements', 5);

    return (
        <div className='improvement-content'><br />
        <div className = 'improvement-heading' style={{fontSize:widthHeading}}>Improvements</div>
        <div className = 'impovement-details'>
            <div style={{flex:1,marginTop:'2.5vh'}}>
            The idea behind this product was to develop an all powerful learning app that grows with its userbase. Initially I thought of  an application that teaches users list of characters on the basis of a mathematical function . (like lets say similarity between characters visual or audio base) Then we cluster together characters to enhance the speed of learning . We could also with enough time analyze users to find their strengths/ weekness . This needed some sort of quiz .
            </div>
            <div style={{flex:1,marginTop:'2.5vh'}}>
            For this initial idea I needed to develop a basic dictonary kind of application. But there was a problem I have never worked on a mobile app . So I ventured into react-native.
            </div><br></br>
            <div style={{flex:1,marginTop:'2.5vh',fontSize:'16px'}}>
            
Over time these are the various improvements that I thaught:<br/>
      1. Extend it for regional languages.<br/>
      2. Improve the UX.<br/>
      3. Analyzing the quiz data.<br/>
      4. Search engine optimization.<br/>

            </div>
        </div>
        <img style={{position:"absolute",bottom:0,top:'20%',margin:'auto',left:0,right:0}} src={Icon} width={'100%'} alt="Logo" />
        </div>
    );
}

export default Improvement;