// Store/configureStore.js

import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'
import toggleVus from './Reducers/vusReducer'
import { persistCombineReducers } from 'redux-persist'

import { AsyncStorage } from 'react-native'


const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite,toggleVus, setAvatar}))