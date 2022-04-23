import { useAppSelector } from "../../app/hooks"
import { selectLoaded, selectPlaying } from "../player/playerSlice"
import { QueueTrack, selectCurrentItem } from "./queueSlice"

import "./QueuePlaybackIndicator.css"

export function QueuePlaybackIndicator(props: {
    item: QueueTrack
}) {
    const currentItem = useAppSelector(selectCurrentItem)
    const loaded = useAppSelector(selectLoaded)
    const playing = useAppSelector(selectPlaying)
    
    return (
        <div className={`queue-playback-indicator ${
            (currentItem && currentItem.index === props.item.index) ? "current" : ""
        } ${
            loaded ? "loaded" : ""
        } ${
            playing ? "playing" : ""
        }`}></div>
    )
}