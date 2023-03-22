import { SONG_STORAGE_KEY } from '~/constants';
export const getStorage = JSON.parse(localStorage.getItem(SONG_STORAGE_KEY)) || {};
export const setStorage = (key = '', value) => {
    getStorage[key] = value;
    localStorage.setItem(SONG_STORAGE_KEY, JSON.stringify(getStorage));
};
