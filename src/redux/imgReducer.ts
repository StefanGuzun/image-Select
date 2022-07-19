import { ImageAction, ImagesState, ImageActionTypes } from "./types"
import APIComponent from "../API"
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
            return {
                ...state,
                loading: false , error: null,
            }
        case ImageActionTypes.FETCH_PHOTOS_FAIL:
            return {loading: false, error: action.payload, images: []}
        default: return state
    }
}
