import React, { useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { play, pause, selectSourceUrl, setLoaded, setCurrentTime, setPlaying, resetActions, setSourceUrlAndPlay, clear } from "./playerSlice"

import { store } from "../../app/store"
import { setCurrentItem } from "../queue/queueSlice";

export function Player() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const sourceUrl = useAppSelector(selectSourceUrl)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const audio = audioRef.current

        if (audio) {
            audio.volume = store.getState().player.volume
        }

        audio?.addEventListener("loadeddata", () => {
            dispatch(setLoaded({
                duration: audio?.duration
            }))

            if (store.getState().player.isPlayAfterLoadedAction) {
                audio?.play()
                dispatch(resetActions())
            }
        })

        audio?.addEventListener("pause", () => {
            dispatch(setPlaying(false))
        })

        audio?.addEventListener("play", () => {
            dispatch(setPlaying(true))
        })

        audio?.addEventListener("timeupdate", () => {
            dispatch(setCurrentTime(audio?.currentTime))
        })

        audio?.addEventListener("ended", () => {
            const queueState = store.getState().queue

            if (queueState.next) {
                dispatch(setCurrentItem(queueState.next))
                dispatch(setSourceUrlAndPlay(queueState.next.sourceUrl))
            } else {
                dispatch(clear())
            }
        })

        // Subscribe!
        store.subscribe(() => {
            if (!audio) {
                return
            }

            const playerState = store.getState().player
            
            if (playerState.isForcePlaybackAction) {
                if (audio.paused && playerState.isPlaying) {
                    audio.play()
                } else if (!audio.paused && !playerState.isPlaying) {
                    audio.pause()
                }

                dispatch(resetActions())
            }

            if (playerState.isSeekAction) {
                dispatch(resetActions())
                audio.currentTime = playerState.currentTime
            }

            if (playerState.isVolumeAction) {
                dispatch(resetActions())
                audio.volume = playerState.volume * (playerState.muted ? 0 : 1)
            }
        })
    }, [])

    return (
        <div className="player">
            <audio src={sourceUrl} ref={audioRef}></audio>
        </div>
    )
}