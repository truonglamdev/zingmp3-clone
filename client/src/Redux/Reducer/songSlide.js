import { createSlice } from '@reduxjs/toolkit';
import { getStorage, setStorage } from '~/utils/storage';
const initialState = getStorage?.song || {
    encodeId: '',
    thumbnailM: '',
    title: '',
    artists: [''],
    duration: 0,
    streamingStatus: 1,
    album: {
        encodeId: '',
    },
    source: '',
};

export const songSlide = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setInfoSong: (state, action) => {
            const { encodeId, thumbnailM, title, artists, duration, album, streamingStatus } = action.payload;
            state.encodeId = encodeId;
            state.thumbnailM = thumbnailM;
            state.title = title;
            state.artists = artists;
            state.duration = duration;
            state.streamingStatus = streamingStatus;
            state.album.encodeId = album.encodeId;
            setStorage('song', action.payload);
        },
        setSource: (state, action) => {
            state.source = action.payload;
        },
    },
});

export const { setInfoSong, setSource } = songSlide.actions;
export default songSlide.reducer;
