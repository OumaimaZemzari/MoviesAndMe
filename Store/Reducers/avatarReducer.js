

const initialState = { Avatar: require('../../Images/ic_tag_faces.png') }

function setAvatar(state=initialState,action) {
    let nextState
    switch (action.type){
        case 'set_Avatar':
        {
            nextState = {
                ...state,
                Avatar:action.value
            }
        }
            return nextState || state
        default:
            return state
    }


}
export default setAvatar