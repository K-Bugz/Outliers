export const setActiveTheme = (theme, override) => {
    return (dispatch) => { 
        dispatch({type: 'SET_ACTIVE_THEME', theme})
        Cookies.set('themecss', theme, {expires: 365})
    }
}