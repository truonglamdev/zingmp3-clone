import globalThemeReducer from '~/state/index';
import { configureStore } from '@reduxjs/toolkit';
import songReducer from '~/Redux/Reducer/songSlide';

export const store = configureStore({
    reducer: {
        themeGlobal: globalThemeReducer,
        song: songReducer,
    },
});
