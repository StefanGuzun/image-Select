import { ImageAction, ImagesState, ImageActionTypes } from "./types"
const initialState : ImagesState = {
    images: [],
    loading: false,
    error: null
}

export const imgReducer = (state = initialState, action: ImageAction): ImagesState  => {
    switch(action.type) {
        case ImageActionTypes.FETCH_PHOTOS:
            return {loading: true, error: null, images: []}
        case ImageActionTypes.FETCH_PHOTOS_SUCCESS:
            return {loading: false, error: null, images: action.payload}
        case ImageActionTypes.FETCH_PHOTOS_FAIL:
            return {loading: false, error: action.payload, images: []}
        default: return state
    }
}
