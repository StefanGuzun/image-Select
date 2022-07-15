export interface ImagesState {
    images: any[],
    loading: boolean,
    error: null | string
}

export enum ImageActionTypes {
    FETCH_PHOTOS = "FETCH_PHOTOS",
    FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
    FETCH_PHOTOS_FAIL = "FETCH_PHOTOS_FAIL"
}

interface FetchImageAction {
    type: ImageActionTypes.FETCH_PHOTOS
}

interface FetchImageSuccessAction {
    type: ImageActionTypes.FETCH_PHOTOS_SUCCESS,
    payload: any[]
}

interface FetchImageFailAction {
    type: ImageActionTypes.FETCH_PHOTOS_FAIL,
    payload: string
}

export type ImageAction = FetchImageAction | FetchImageFailAction | FetchImageSuccessAction