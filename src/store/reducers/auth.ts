import * as actionTypes from 'store/actions/actionTypes';


const initialState = {
    isAuthenticated: false,
    loading: false,
    error: false,
};

const reducer = ( state = initialState, action: actionTypes.AuthDispatchTypes ) =>{
    switch( action.type ){
        case actionTypes.AUTH_SUCCESS:
            return {
                isAuthenticated: true,
                loading: false,
                error: false
            }
        case actionTypes.AUTH_START:
            return {
                isAuthenticated: false,
                loading: true,
                error: false
            }
        case actionTypes.AUTH_FAILED:
            return {
                isAuthenticated: false,
                loading: false,
                error: true
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                isAuthenticated: false,
                loading: false,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;
