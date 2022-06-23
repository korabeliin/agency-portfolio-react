import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import servicesGalleryReducer from './servicesGallerySlice';

export const store = configureStore({
    reducer: {
        services: servicesGalleryReducer,
    },
})