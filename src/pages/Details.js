import React from 'react';
import './Details.css';
import SlideShow from './SlideShow.js';
import {getTextWidth} from './animate.js';
class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = { index: 0 ,width: window.innerWidth}
    }

    componentDidMount= function() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount= function() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = ()=> {
        this.setState({ ...this.state,width: window.innerWidth, height: window.innerHeight });
      }

    data = [
        {
            heading: 'Registration',
            subheading: [
                'The user starts on this page . This is standard login/registration page.'
            ]
        },
        {
            heading: 'Home',
            subheading: [
                'The user is presented with a search bar and other options.'
            ]
        },
        {
            heading: 'Search',
            subheading: [
                "The user can search for Chinese character via it's pronunciation(pinyin) or the exact character(via a Chinese keyboard).",
                "Since many characters may have a similar pinyin the search is designed to list all possible characters whose sound  starts with the search term ('ren' as depicted in the image).",
                "The user can than scroll this list and select a character to display"
            ]
        },
        {
            heading: 'CHARACTER',
            subheading: [
                "This gif depicts all the information you can access . initially you will see the character and a stroke animation depicting how the character is to be drawn.",
                "To repeat the animation just press on I button twice. Pressing on I button once loads a list of corresponding images which can be scrolled horizontally.",
                "To the right of I button is a list of meanings for that character there can me multiple meanings which can be accessed via vertical scrolling.",
                "Clicking on the AUDIO icon plays the pronunciation of that character."
            ]
        },
        {
            heading: 'LEARN',
            subheading: [
                "The Hanyu Shuiping Kaoshi, translated as the Chinese Proficiency Test used in China, is the standardized test of Standard Chinese language proficiency of China for non-native speakers such as foreign students and overseas Chinese. ",
                "These tests have various levels and each level corresponds to a set of characters which can be accessed from these options."
            ]
        },
        {
            heading: 'CHARACTER LIST',
            subheading: [
                "App fetches the next 10 characters from server and loads it in memory . user can tap on buttons to navigate as depicted in gif and CHARCTER PAGE."
            ]
        },
        {
            heading: 'QUIZ',
            subheading: [
                "The quiz contains of 10 random questions generated from the set of characters you  user has already seen in the HSK's .",
                "Each question is of the from Select multiple options for a particular character. There is negative marking also. Selecting all correct options yield 1 point.",
                "Sound option: Tapping on sound option once plays the sound and selects the option .To deselect the option user needs to tap on sound option again.",
                "Image  option: Tapping on image option once magnifies the image tap again to select the option. .To deselect the option user needs to tap on image to magnify it and tap again to deselect. Image option can also be toggled by long pressing the option."
            ]
        },
        {
            heading: 'Quiz',
            subheading: [
                "At the end of the quiz you are given a score."
            ]
        },
        {
            heading: 'Draw and Discover',
            subheading: [
                "Yet to be imlemented."
            ]
        }
    ]

    render() {

        const navigate = (val) => {
            this.setState({ index: val });
        }
        let widthHeading = 80;
        for(var i=0;i<this.data.length;i++){
            widthHeading = Math.min(widthHeading,getTextWidth("CodyStar",0.95,this.data[i].heading,10));
        }
        if(!widthHeading)
        widthHeading = 80;
        return (
            <div className="details-content">
                <br/>
                <div className="details-heading" style={{fontSize:widthHeading}}>
                    {this.data[this.state.index].heading}
                </div>
                <div className="details-body">
                    <SlideShow active={this.state.index} navigate={navigate} />
                    <div className="details-data">
                        <div className="details-subheading">
                            {this.data[this.state.index].subheading.map((item, index) => (
                                <div key={index}><br />{item}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Details;