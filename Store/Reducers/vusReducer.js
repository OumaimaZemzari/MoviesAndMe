const initialState = { vusFilm: [] }

function toggleVus(state=initialState,action) {
    let nextState
    switch (action.type){
        case 'TOGGLE_Vus':
            const vusFilmIndex=state.vusFilm.findIndex(item => item.id==action.value.id)
            if(vusFilmIndex!==-1){
                nextState = {
                    ...state,
                    vusFilm: state.vusFilm.filter( (item, index) => index !== vusFilmIndex)
                }
            }
            else{
                nextState = {
                    ...state,
                    vusFilm: [...state.vusFilm ,action.value]
                }
            }
            return nextState || state
        default:
            return state
    }


}
export default toggleVus
