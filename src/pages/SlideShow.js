import React from 'react';
import './Slideshow.css';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

class SlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sizeLeft: 40, sizeRight: 40 }
    }

    render() {
        let active = this.props.active;
        let navigate = this.props.navigate;
        return (

            <div className='slideshow-content'>

                <div className='slideshow-icon'><BsFillCaretLeftFill size={this.state.sizeLeft} onMouseOver={() => { this.setState({ ...this.state, sizeLeft: 60 }) }} onMouseOut={() => { this.setState({ ...this.state, sizeLeft: 40 }) }} onClick={() => {
                    if (active !== 0) navigate(active - 1)
                }
                } /></div>
                {this.loadData(active)}
                <div className='slideshow-icon'><BsFillCaretRightFill onMouseOver={() => { this.setState({ ...this.state, sizeRight: 60 }) }} onMouseOut={() => { this.setState({ ...this.state, sizeRight: 40 }) }} size={this.state.sizeRight} onClick={() => { if (active !== 8) navigate(active + 1) }} /></div>

            </div>

        )
    }
    // <div className='slideshow-left'>{active === 0 ? <div className='empty'></div>:}</div>
    // <div className='slideshow-main'><img alt="Loading..." src={require('../assets/screenshots/' + active +'.jpg')} /></div>
    // <div className='slideshow-right'>{active === 2 ? <div className='empty'></div>:<img alt="Loading..." src={require('../assets/screenshots/' + (1+active) +'.jpg')} />}</div>

    loadData = (active) => {
        var op = [];
        if(active === 0 ){
            op.push(
                <div key={0} className='slideshow-image slideshow-left'>
                    <div className='empty'></div></div>
            );
        }
        for (let i = 0; i <=8; i++) {
            var temp = 'slideshow-image';
            if (i === active - 1)
                temp += ' slideshow-left'
            if (i === active)
                temp += ' slideshow-main'
            if (i === active + 1)
                temp += ' slideshow-right'
            op.push(
                <div key={i+1} className={temp}>
                    <img alt="Loading..." src={require('../assets/screenshots/' + (i) + '.jpg')} /></div>
            );
        }
        op.push(
            <div key={10} className='slideshow-image slideshow-right'>
                <div className='empty'></div></div>
        );
        return op;
    }
}
export default SlideShow;