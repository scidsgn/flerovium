import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

type PlayerLoadedData = {
    duration: number
}

export interface PlayerState {
    sourceUrl: string,
    isLoaded: boolean,

    isPlaying: boolean,

    isForcePlaybackAction: boolean,
    isPlayAfterLoadedAction: boolean,
    isSeekAction: boolean,
    isVolumeAction: boolean,

    duration: number,
    currentTime: number,

    volume: number,
    muted: boolean
}

const initialState: PlayerState = {
    sourceUrl: "",
    isLoaded: false,

    isPlaying: false,

    isForcePlaybackAction: false,
    isPlayAfterLoadedAction: false,
    isSeekAction: false,
    isVolumeAction: false,

    duration: 0,
    currentTime: 0,

    volume: 1,
    muted: false
}

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setSourceUrl: (state, action: PayloadAction<string>) => {
            if (state.sourceUrl !== action.payload) {
                if (state.isPlaying) {
                    state.isPlayAfterLoadedAction = true
                }

                state.sourceUrl = action.payload
                state.isLoaded = false
            }
        },
        setSourceUrlAndPlay: (state, action: PayloadAction<string>) => {
            if (state.sourceUrl !== action.payload) {
                state.sourceUrl = action.payload
                state.isLoaded = false
                state.isPlayAfterLoadedAction = true
            }
        },

        setLoaded: (state, action: PayloadAction<PlayerLoadedData>) => {
            state.isLoaded = true
            state.duration = action.payload.duration
        },
        clear: (state) => {
            state.isLoaded = false
            state.sourceUrl = ""
        },

        play: (state) => {
            state.isPlaying = true
            state.isForcePlaybackAction = true
        },
        pause: (state) => {
            state.isPlaying = false
            state.isForcePlaybackAction = true
        },
        playPause: (state) => {
            state.isPlaying = !state.isPlaying
            state.isForcePlaybackAction = true
        },
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload
        },

        resetActions: (state) => {
            state.isForcePlaybackAction = false
            state.isPlayAfterLoadedAction = false
            state.isSeekAction = false
            state.isVolumeAction = false
        },

        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload
        },
        seek: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload
            state.isSeekAction = true
        },

        volume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload
            state.muted = false
            state.isVolumeAction = true
        },
        toggleMute: (state) => {
            state.muted = !state.muted
            state.isVolumeAction = true
        }
    }
})

export const selectSourceUrl = (state: RootState) => state.player.sourceUrl

export const selectLoaded = (state: RootState) => state.player.isLoaded

export const selectPlaying = (state: RootState) => state.player.isPlaying

export const selectDuration = (state: RootState) => state.player.duration
export const selectCurrentTime = (state: RootState) => state.player.currentTime

export const selectVolume = (state: RootState) => state.player.volume
export const selectMuted = (state: RootState) => state.player.muted

export const {
    setSourceUrl, setSourceUrlAndPlay,
    setLoaded, clear,

    play, pause, playPause, setPlaying,
    
    resetActions,

    setCurrentTime, seek,
    volume, toggleMute
} = playerSlice.actions

export default playerSlice.reducer