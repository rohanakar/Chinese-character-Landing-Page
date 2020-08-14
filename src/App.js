import React, { useEffect } from 'react';
import NAVBAR from './screens/Navbar/Navbar';
import Details from './screens/DetailsScreen/Details';
import Home from './screens/HomeScreen/Home';
import Landing from './screens/LandingScreen/Landing';
import { resize, activeNavBarComponent,setFontLoaded } from './redux/actions';
import { useDispatch,useSelector } from 'react-redux';
import Overview from './screens/Overview/Overview';
import Improvement from './screens/Improvements/Improvement';

const App = () => {

  const dispatch = useDispatch();
  document.fonts.onloadingdone = function (fontFaceSetEvent) {
    dispatch(setFontLoaded({fontLoaded:true}));
  };
  const { width } = useSelector(state => state?state.screenReducer:undefined);
  useEffect(() => {

    function handleScroll(){
      let currScroll = document.documentElement.scrollTop;
      let home = document.getElementsByClassName('home-content')[0].offsetTop;
      let details = document.getElementsByClassName('details-content')[0].offsetTop;
      let overview = document.getElementsByClassName('overview-content')[0].offsetTop;
      let improvement = document.getElementsByClassName('improvement-content')[0].offsetTop;
      let res = -1;
  
      if (home < currScroll) {
        res = 0;
        if (details < currScroll){
          res = 1;
          if(overview<currScroll){
            res=2;
            if(improvement<currScroll)
              res=3;
          }
        }
      }
  
      console.log(`setting active ${res}`);
      dispatch(activeNavBarComponent({active:res}));
    }
    function handleResize() {
      setTimeout(function () {
        dispatch(resize());
      }, 150);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [dispatch]);


  return (
    width?
    <div>
      <NAVBAR />
      <Landing />
      <Home />
      <Details />
      <Overview/>
      <Improvement/>
    </div>:null
  )
}

export default App;
