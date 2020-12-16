import * as actionTypes from 'store/actions/actionTypes';
import { IPost } from 'types';


const initialState = {
    loading: false,
    posts:[
        {
            title: 'First Post',
            place: 'Rawalpindi',
            description: 'This is my first post.',
            owner: 'user1',
        }
    ]
};

const reducer = ( state = initialState, action: actionTypes.CreatePostDispatchTypes ) =>{
    switch( action.type ){
        case actionTypes.CREATE_POST_SUCCESS:
            const newPost: IPost = {
                title: action.payload.title,
                place: action.payload.place,
                description: action.payload.description,
                owner: action.payload.owner,
            }
            return {
                ...state,
                posts: state.posts.concat(newPost),
                loading: false
            }
        case actionTypes.CREATE_POST_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_POST_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};

export default reducer;
