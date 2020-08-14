// will have all methods related to navbar

const navbarReducer = (state={showMenu:false},action) => {
    switch(action.type){
        case 'setShowMenu':
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default navbarReducer;