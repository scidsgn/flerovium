import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { mockLibrary } from "./mock"
import { LibraryAlbumType, LibraryArtistType, LibraryTrackType, LibraryType } from "./types"

export enum LibraryPageType {
    tracks, artists, albums,
    track, artist, album
}

export interface LibraryState {
    library: LibraryType
}

const initialState: LibraryState = {
    library: mockLibrary
}

export const librarySlice = createSlice({
    name: "library",
    initialState,
    reducers: {
    }
})

export const selectLibrary = (state: RootState) => state.library.library

export const {
} = librarySlice.actions

export default librarySlice.reducer