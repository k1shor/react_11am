import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import gameReducer from "./gameReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

// export const myStore = createStore(counterReducer)
// export const myStore = createStore(gameReducer)

const rootReducer = combineReducers({
    counterStore: counterReducer,
    gameStore: gameReducer
})
// export const myStore = createStore(rootReducer)

const myPersistConfig = {
    key: 'root',
    storage,
  }

const myPersistedReducer = persistReducer(myPersistConfig, rootReducer)

export const myStore = createStore(myPersistedReducer)
export const myPersistor = persistStore(myStore)