import pictureApi from "../picture.api";
import * as actions from "./actions";

const mapWierdMongoIdToNormal = entity => {
    const { _id, ...props } = entity;
    return {...props, id: _id};
};

export const fetchPictures = () => async dispatch => {
    dispatch(actions.fetchPicturesStarted());
    try {
        const { data } = await pictureApi.get('');
        const pictures = data.map(picture => mapWierdMongoIdToNormal(picture));
        dispatch(actions.fetchPicturesSuccess(pictures));
    } catch (e) {
        dispatch(actions.fetchPicturesFailed());
    }
};

export const fetchPicture = id => async dispatch => {
    dispatch(actions.fetchPicturesStarted());
    try {
        const { data } = await pictureApi.get(`/${id}`);
        const picture = mapWierdMongoIdToNormal(data);
        dispatch(actions.fetchPictureSuccess(picture));
    } catch (e) {
        dispatch(actions.fetchPicturesFailed());
    }
};

export const createPicture = picture => async dispatch => {
    try {
        const { data } = await pictureApi.post('', picture);
        dispatch(actions.pictureCreated(mapWierdMongoIdToNormal(data)));
    } catch (e) {
        console.error(e);
    }
};

export const updatePicture = picture => async dispatch => {
    try {
        const { data } = await pictureApi.put(`/${picture.id}`, picture);
        dispatch(actions.pictureUpdated(mapWierdMongoIdToNormal(data)));
    } catch (e) {
        console.error(e);
    }
};

export const deletePicture = id => async dispatch => {
    try {
        await pictureApi.delete(`/${id}`);
        dispatch(actions.pictureDeleted(id));
    } catch (e) {
        console.error(e);
    }
};