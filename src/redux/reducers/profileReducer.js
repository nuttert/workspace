import * as TYPES from '../actions/actionsTypes';

const initialState = {
    data: null,
    isReady: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.UPDATE_BACKGROUND_IMAGE:
            state = {
                ...state,
                data: !!state.data ? {...state.data,
                    backgroundImage: action.payload
                } : { backgroundImage: action.payload }
            }
        case TYPES.SET_USER_DATA:
            state = {
                ...state,
                data: action.payload,
                isReady:true
            }
        case TYPES.SET_PROFILE_DESCRIPTIONSCRIPTIONS:
            state = {
                ...state,
                descriptions: action.payload,
            }
        default:
            break;
    }
    return state;
};
export default profileReducer;
