export const resize= () =>{
    return {
        type : 'resize',
        payload : {
            width: window.innerWidth,
            height: window.innerHeight,
          }
    }
}

export const activeNavBarComponent= (payload) =>{
    return {
        type : 'activeNavBarComponent',
        payload
    }
}

export const setShowMenu = (payload) =>{
    return {
        type : 'setShowMenu',
        payload
    }
}

export const setFontLoaded = (payload) => {
    return {
        type: 'setFontLoaded',
        payload
    }
}