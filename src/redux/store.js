import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './gitHubSlice';

export const store = configureStore({
    reducer: {
        github: githubReducer,
    },
});
