// will have all methods related to screen

const screenReducer = (state={},action) => {
    switch(action.type){
        case 'resize':
            return {...state,...action.payload};
        case 'activeNavBarComponent':
            return {...state,...action.payload};
        case 'setFontLoaded':
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default screenReducer;