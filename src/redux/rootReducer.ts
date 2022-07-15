import { combineReducers } from "redux"
import { realNotReal } from "./actions"

export const rootReducer = combineReducers({
    app: realNotReal
})