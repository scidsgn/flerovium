import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import playerReducer from "../features/player/playerSlice"
import queueReducer from "../features/queue/queueSlice"
import libraryReducer from "../features/library/librarySlice"

export const store = configureStore({
    reducer: {
        player: playerReducer,
        queue: queueReducer,
        library: libraryReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
