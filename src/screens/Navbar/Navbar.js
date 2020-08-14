import React from 'react';
import './Navbar.css';
import {animate} from '../../utils/util'
import { FiAlignRight } from "react-icons/fi";
import {useSelector} from 'react-redux';
import {setShowMenu} from '../../redux/actions';
import { useDispatch } from 'react-redux';

const NAVBAR = ()=>{

    const {width,active} = useSelector(state=>state.screenReducer);
    const {showMenu} = useSelector(state=>state.navbarReducer);
    const dispatch = useDispatch();
    console.log({showMenu});
    const setshowMenu = (showMenu)=>{
        dispatch(setShowMenu({showMenu}));
    }

    let widthBox = '651px';
    if(!width || width<=650){
        if(showMenu)
            widthBox = '45%';
        else
            widthBox = '0%';
    }
    
    return (
        <div className='nav'>
        <FiAlignRight size={30} color='white' className='icon' onClick={()=>{setshowMenu(!showMenu)}}/>  
            <div className='nav-heading' onClick={()=>{animate('content',-1)}}>汉字</div>
                <div className="box" style={{width:widthBox}}>
                <div className={active === 0 ? "link active-home" : "link"}> <li onClick={() => animate('home-content')}>Home</li></div>
                <div className={active === 1 ? "link active-details" : "link"}> <li onClick={() => animate('details-content')}>Details</li></div>
                <div className={active === 2 ? "link active-overview" : "link"}> <li onClick={() => animate('overview-content')}>Overview</li></div>
                <div className={active === 3 ? "link active-improvement" : "link"}> <li onClick={() => animate('improvement-content')}>Improvements</li></div>
                </div>
        </div>
    )
}

 
export default NAVBAR;
    