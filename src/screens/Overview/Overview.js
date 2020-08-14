import React from 'react';
import './Overview.css';
import { useSelector } from 'react-redux';
import { getTextWidth } from '../../utils/util';

const Overview = () => {
    const { width } = useSelector(state => state.screenReducer);
    var widthHeading = getTextWidth("CodyStar", 0.8 * width, 'Backend Overview', 5);
    widthHeading = Math.min(80, widthHeading);
    return (
        <div className='overview-content'><br />
            <div className='overview-heading' style={{ fontSize: widthHeading }}>
                UI Overview
                <div className='overview-cards'>
                    <div className='overview-card'>
                        <div className='card-heading'>Library Used</div>
                        <li>expo : Base stuff</li>
                        <li>react native : Base Stuff</li>
                        <li>expo font : For loading the font</li>
                        <li>expo-av: For playing audio.</li>
                        <li>react-native-svg-animations : for drawing and animating character strokes in a particular order. </li>
                        <li>react-native-svg : For drawing a complete character as a SVG.</li>
                    </div>
                    <br></br>
                    <div className='overview-card'>

                        <div className='card-heading'>key features</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '20%' }}>
                                State management :
                            </div>
                            <li style={{ paddingLeft: '2px' }}>{"done by implementing basic redux functionality using Context and useReducer. UseReducer takes initialState and reducer( a function that updates our state) .Context allow to pass values without having to explicitly pass a prop through every level of the tree. So we add two context's one for authorization state management and one for global state management at the top of our main app . To access the states we use useContext method . It Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree."}</li>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '20%' }}>
                                Initial Flow :
                            </div>
                            <li style={{ paddingLeft: '2px' }}>{"we wait for our fonts to be loaded and once they have loaded we render our app. We are also storing a token and an email of the user in the phone's memory which we check at startup isong useEffect hook. If we find it we update our state. Dependng upon weather a user is logged in we display the defaultScreen to be either home or login. We also update state.isLoading whenever we are calling an API."}</li>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '20%' }}>
                                Navigation :
                            </div>
                            <li style={{ paddingLeft: '2px' }}>{"For navigation we use NavigationContainer in which we use Drawer.Navigation and define our own customDrawerContent in which if user is loggedIn the options available to users are [home,learn,quiz,draw,discover] else we display login/register screen and we define the component mapping for a route using the name prop in <Drawer.screen>. We also have a custom component called loading which has a small animation and we load it if isLoading is true."}</li>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '20%' }}>
                                Character drawing and animation :
                            </div>
                            <li style={{ paddingLeft: '2px' }}>{"We receive from backend stillPoints and animated points (list of String). The still point has co-ordinates and the curve parameters where as the animated path has co-ordinates which  are to be connected via straight lines which can be animated in react easily. The no. of elements in list are determined by the number of times u will have to lift the pen while drawing it.. we animate 1 element the animate other after 1st has animated to create a smoothoverall flow."}</li>
                        </div>

                    </div>
                </div>
            </div>
            <br /><br /><br />
            <hr style={{ borderColor: 'black', width: '80%', margin: 'auto' }} />

            <div className='overview-heading' style={{ fontSize: widthHeading, marginTop: '15vh' }}>
                Backend Overview
                <div className='overview-cards'>
                    <div className='overview-card'>
                        <div className='card-heading'>Library Used</div>
                        <li>springboot : Base stuff</li>
                        <li>selenium-chrome-driver : Automation and data gathering</li>
                    </div>
                    <br></br>
                    <div className='overview-card'>

                        <div className='card-heading'>key features</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '14%' }}>
                                DataSet :
                            </div>
                            <li style={{ paddingLeft: '2px' }}>{"Dcitonary.txt and graphics.txt downloaded from htps://github.com/skishore/makemeahanzi . Processed them using a script into a sngle json file used this as a base for mongodb."}</li>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '14%' }}>
                                Initial Work :
                            </div>
                            <li style={{ paddingLeft: '2px' }}>{"From a text based dictonary i created a audio-image-text based dictonary. To do so i learned SELENIUM.. Eg. 一 means '1'/'a' and is pronounced as 'yi' . So i scrapped google images fro the top 10 image meanings and scrapped the pronounciation. and added 2 utitlity methods to generateImages and Audio. Then i manually cleaned tha images (selected a subset of images) as there were some misleading images . Eg. if we searched seven it leads to an image of actor that worked in seven movie. After the manual reviewing i added these images and audio in db ."}</li>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '10px', paddingRight: '2px', textDecoration: 'underline', width: '14%' }}>
                                Key Features :
                            </div>
                            <div style={{ paddingLeft: '2px', flex: '1 1' }}>
                                <li style={{ padding: '2px', paddingTop: '10px' }}>{"Implemented search api which searches a character on the basis of it's pronounciation/actual character. which works by de-accent ing a given string ."}</li>
                                <li style={{ padding: '2px' }}>{"Implemented a quiz api to generate a score based algorithm."}</li>
                                <li style={{ padding: '2px' }}>{"Implemented JWT token and used that for authentication mechanism."}</li>
                                <li style={{ padding: '2px' }}>{"Added Request interceptor to only allow certain endpoints to be hitted and allow certain endpoints without token."}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <hr style={{ borderColor: 'black', width: '80%', margin: 'auto', borderWidth:'1.2px' }} />

            <div className='overview-heading' style={{ fontSize: widthHeading , marginTop: '15vh'}}>
                Deployment Overview
                <div className='overview-cards' style={{marginBottom:'10vh'}}>

                    <div className='overview-card'>
                        <div className='card-heading'>key features</div>
                        <li style={{ paddingLeft: '2px' }}>{" Build a jar file on my local system. Created an ec2-intsnance and installed java there ran the jav -jar command for running bakend"}</li>
                        <li style={{ paddingLeft: '2px' }}>{"Build the apk using expo-cli and used that on google play developer console ."}</li>
                    </div>
                </div>
            </div>
        <br></br>

        </div>
    )
}

export default Overview;