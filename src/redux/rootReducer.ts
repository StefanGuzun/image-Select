import { combineReducers } from "redux"
import { imgReducer } from "./imgReducer"

export const rootReducer = combineReducers({
    image: imgReducer
})

export type RootState = ReturnType<typeof rootReducer>