import React from 'react';
import './Navbar.css';
import {animate} from './animate.js'
import { FiAlignRight } from "react-icons/fi";

class NAVBAR extends React.Component {

 

    constructor(props) {
        super(props);
        this.state = { scrollHeight: document.documentElement.scrollTop, active: -1 ,showMenu:false,width: window.innerWidth}
    }

    componentDidMount= function() {
        window.addEventListener('scroll', this.handleScroll);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount= function() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = ()=> {
        this.setState({ ...this.state,width: window.innerWidth, height: window.innerHeight });
      }

    handleScroll= ()=> {
        let currScroll = document.documentElement.scrollTop;
        let home = document.getElementsByClassName('home-content')[0].offsetTop; 
        let details = document.getElementsByClassName('details-content')[0].offsetTop; 
       let active=-1;
        
       if(home<currScroll){
            active=0;
            if(details<currScroll)
                active =1;
       }
      
       console.log(`setting active ${active}`) ;
        this.setState({
            scrollHeight:currScroll,active:active
        });
    }
    render() {
        var active = this.state.active;
        console.log(this.state);
        let width = '500px';
        if(this.state.width<=650){
            if(!this.state.showMenu) 
                width = '0%';
            else
                width = '60%';
        }
        return (
            <div>
            <div className='nav'>
            <FiAlignRight size={30} color='white' className='icon' onClick={()=>{this.setState({...this.state,showMenu:!this.state.showMenu})}}/>  
                <div className='nav-heading' onClick={()=>{animate('content',-1)}}>汉字</div>
                    <div className="box" style={{width}}>
                    <div className={active === 0 ? "link active-home" : "link"}> <li onClick={() => animate('home-content',0)}>Home</li></div>
                    <div className={active === 1 ? "link active-details" : "link"}> <li onClick={() => animate('details-content',1)}>Details</li></div>
                    <div className={active === 2 ? "link active" : "link"}> <li>Improvements</li></div>
                    <div className={active === 3 ? "link active" : "link"}> <li>Implementation</li></div>
                    </div>
            </div>
            </div>
        )
    }
}
export default NAVBAR;