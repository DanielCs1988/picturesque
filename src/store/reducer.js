import * as actions from './actions';

const initialState = {
    pictures: [],
    loading: false,
    pictureSaved: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.RESET_FORM_SAVED:
            return {
                ...state,
                pictureSaved: false
            };
        case actions.FETCH_PICTURES_STARTED:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_PICTURES_SUCCESS:
            return {
                ...state,
                pictures: action.pictures,
                loading: false
            };
        case actions.FETCH_PICTURES_FAILED:
            return {
                ...state,
                loading: false
            };
        case actions.FETCH_PICTURE_SUCCESS:
            return {
                ...state,
                pictures: [...state.pictures, action.picture],
                loading: false
            };
        case actions.PICTURE_CREATED:
            return {
                ...state,
                pictureSaved: true,
                pictures: [...state.pictures, action.picture]
            };
        case actions.PICTURE_UPDATED:
            return {
                ...state,
                pictureSaved: true,
                pictures: state.pictures
                    .map(picture => picture.id === action.picture.id ? {...action.picture} : picture)
            };
        case actions.PICTURE_DELETED:
            return {
                ...state,
                pictureSaved: true,
                pictures: state.pictures.filter(picture => picture.id !== action.id)
            };
        default:
            return state;
    }
};

export default reducer;