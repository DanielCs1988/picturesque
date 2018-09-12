export const RESET_FORM_SAVED = 'RESET_FORM_SAVED';
export const FETCH_PICTURES_STARTED = 'FETCH_PICTURES_STARTED';
export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS';
export const FETCH_PICTURES_FAILED = 'FETCH_PICTURES_FAILED';
export const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS';

export const PICTURE_CREATED = 'PICTURE_CREATED';
export const PICTURE_UPDATED = 'PICTURE_UPDATED';
export const PICTURE_DELETED = 'PICTURE_DELETED';

export const resetFormSaved = () => ({ type: RESET_FORM_SAVED });

export const fetchPicturesStarted = () => ({ type: FETCH_PICTURES_STARTED });

export const fetchPicturesSuccess = (pictures) => ({
    type: FETCH_PICTURES_SUCCESS,
    pictures
});

export const fetchPicturesFailed = () => ({ type: FETCH_PICTURES_FAILED });

export const fetchPictureSuccess = (picture) => ({
    type: FETCH_PICTURE_SUCCESS,
    picture
});

export const pictureCreated = (picture) => ({
    type: PICTURE_CREATED,
    picture
});

export const pictureUpdated = (picture) => ({
    type: PICTURE_UPDATED,
    picture
});

export const pictureDeleted = (id) => ({
    type: PICTURE_DELETED,
    id
});
