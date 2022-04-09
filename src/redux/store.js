import { createStore } from 'redux'
import rootReducer from './root-reducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger';
import persistStore from 'redux-persist/lib/persistStore'

const middleWare=[logger]

export const store = createStore(rootReducer,applyMiddleware(...middleWare));
export const persistor = persistStore(store)