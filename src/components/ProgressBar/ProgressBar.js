import React from 'react';

const ProgressBar = (props) =>{
    console.log(props);
    const {active,total} = props;
    const marker = 100/total;
    return (
        <div style={{borderRadius:'10px',marginLeft:'10%',marginTop:'2vh',width:'80%',height:'5px',backgroundColor:'black'}}>
            <div style={{borderRadius:'10px',width:`${marker}%`,height:'6px',backgroundColor:'#b7ffa8',marginLeft:`${active*marker}%`}}></div>
        </div>
    )
}

export default ProgressBar;