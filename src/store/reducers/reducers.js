// const initState = {
//     ff7: 0,
//     castlevania: 0,
//     matalGear: 0
// }

// export default (state = initState, action) => {
//     switch (action.type) {
//         case: 'Vote_FF7': 
//             return Object.assign({}, state, {
//                 ff7: state.ff7 + 1
//             })
//         case: 'Vote_Castlevania: SOTN'
//             return Object.assign({}, state, {
//                 ff7: state.ff7 + 1
//             })
//         case: 'Vote_Metal Gear Solid'
//             return Object.assign({}, state, {
//                 ff7: state.ff7 + 1
//             })
//         default: 
//         return state 
//     }
// }

const initState = {
    activeTheme: 'default'
  }
const reducers = (state = initState, action) => {
    switch (action.type) {
    case 'SET_ACTIVE_THEME':
        return {
        ...state,
        activeTheme: action.theme
        }
    default:
        return state
    }
}
export default reducers