import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NumberLiteralType } from "typescript"
import { RootState } from "../../app/store"

export type QueueTrack = {
    index: number,

    title: string,
    artist: string,
    coverUrl: string,

    sourceUrl: string,

    first: boolean,
    last: boolean
}

export interface QueueState {
    items: QueueTrack[],
    current: QueueTrack | null,
    previous: QueueTrack | null,
    next: QueueTrack | null
}

const initialState: QueueState = {
    items: [],
    current: null,
    previous: null,
    next: null
}

function updateIndices(items: QueueTrack[]) {
    items.forEach((item, i) => {
        item.index = i
        item.first = i === 0
        item.last = i === (items.length - 1)
    })
}

function updatePrevNext(state: QueueState) {
    if (!state.current) {
        state.previous = null
        state.next = null
        return
    }

    if (state.current.index > 0) {
        state.previous = state.items[state.current.index - 1]
    } else {
        state.previous = null
    }

    if (state.current.index < state.items.length - 1) {
        state.next = state.items[state.current.index + 1]
    } else {
        state.next = null
    }
}

export const queueSlice = createSlice({
    name: "queue",
    initialState,
    reducers: {
        setCurrentItem: (state, action: PayloadAction<QueueTrack>) => {
            state.current = action.payload
            updatePrevNext(state)
        },

        addItem: (state, action: PayloadAction<QueueTrack>) => {
            state.items = [...state.items, action.payload]
            updateIndices(state.items)
            updatePrevNext(state)
        },
        addItemAndSetCurrent: (state, action: PayloadAction<QueueTrack>) => {
            state.items = [...state.items, action.payload]
            updateIndices(state.items)

            state.current = state.items[state.items.length - 1]
            updatePrevNext(state)
        },
        deleteItem: (state, action: PayloadAction<QueueTrack>) => {
            if (state.current?.index === action.payload.index) {
                state.current = null
            }

            if (state.current && action.payload.index < state.current.index) {
                state.current.index -= 1
            }

            state.items = state.items.filter(
                item => item.index !== action.payload.index
            )
            updateIndices(state.items)
            updatePrevNext(state)
        },

        moveItemDown: (state, action: PayloadAction<QueueTrack>) => {
            if (action.payload.index < state.items.length - 1 && state.items.length > 1) {
                const i = action.payload.index
                const tmp = state.items[i]
                
                state.items[i] = state.items[i + 1]
                state.items[i + 1] = tmp

                if (state.current) {
                    if (state.current.index === i) {
                        state.current.index = i + 1
                    } else if (state.current.index === i + 1) {
                        state.current.index = i
                    }
                }

                updateIndices(state.items)
                updatePrevNext(state)
            }
        },
        moveItemUp: (state, action: PayloadAction<QueueTrack>) => {
            if (action.payload.index > 0 && state.items.length > 1) {
                const i = action.payload.index
                const tmp = state.items[i]
                
                state.items[i] = state.items[i - 1]
                state.items[i - 1] = tmp

                if (state.current) {
                    if (state.current.index === i) {
                        state.current.index = i - 1
                    } else if (state.current.index === i - 1) {
                        state.current.index = i
                    }
                }
                
                updateIndices(state.items)
                updatePrevNext(state)
            }
        }
    }
})

export const selectQueueItems = (state: RootState) => state.queue.items

export const selectCurrentItem = (state: RootState) => state.queue.current
export const selectPreviousItem = (state: RootState) => state.queue.previous
export const selectNextItem = (state: RootState) => state.queue.next

export const {
    setCurrentItem,
    addItem, addItemAndSetCurrent, deleteItem,
    moveItemDown, moveItemUp
} = queueSlice.actions

export default queueSlice.reducer