import React, { useState } from 'react';
import './Details.css';
import { getTextWidth } from '../../utils/util';
import data from '../../utils/detailsData';
import { useSelector } from 'react-redux';
import SlideShow from '../../components/Slideshow/SlideShow.js';
import ProgressBar from '../../components/ProgressBar/ProgressBar.js';



const Details = () => {

    const { width } = useSelector(state => state.screenReducer);
    const [index, setIndex] = useState(0);
    const [detailsData, setDetailsData] = useState(false);
    console.log({ detailsData });
    const navigate = (index) => {
        setIndex(index);
    }
    let widthHeading = 1000;

    for (var i = 0; i < data.length; i++) {
        widthHeading = Math.min(widthHeading, getTextWidth("CodyStar", 0.95 * width, data[i].heading, 10));
    }
    if (!widthHeading)
        widthHeading = 80;
    const iconData = !detailsData ? 'i' : 'X';
    const afterelem = !detailsData ? 'know more' : 'close';
    const eleStyle = !detailsData ? {
        top: '24%',
        left: '0',
        right: '100%',
        bottom: '76%',
        padding: '0'
    } : {}

    const subHeadingStyle = !detailsData?{
       top:'-70vh',
       opacity:0,
    }:{};
    return (
        <div className="details-content">
            <br />
            {width < 900 ? <div className='circle' cntnt={afterelem} onClick={() => { setDetailsData(!detailsData) }}><span>{iconData}</span></div> : null}
            <div className="details-heading" style={{ fontSize: widthHeading }}>
                {data[index].heading}
            </div>
            <div className="details-body" >
                <SlideShow active={index} navigate={navigate} />

                {width > 900 ? <div className="details-data" >
                    <div className="details-subheading">
                        {data[index].subheading.map((item, index) => (
                            <div key={index} style={{flex:1}}><br />{item}</div>
                        ))}
                    </div>
                </div> : null}
                {width < 900?<div className="details-data2" style={{ ...eleStyle }}>
                    <div className="details-subheading2" style={{...subHeadingStyle}}>
                        {data[index].subheading.map((item, index) => (
                            <div key={index} className="elem"><br />{item}</div>
                        ))}
                    </div>
                </div>:null}

            </div>
            <ProgressBar active={index} total={data.length} />
            <br></br>
        </div>
    )
}

export default Details;