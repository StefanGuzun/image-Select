import { Action } from "history";
import { createStore } from "redux"
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer)

export const real = { type: "REAL" }
export const notReal = { type: "FAKE" }
