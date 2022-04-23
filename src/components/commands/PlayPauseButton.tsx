import { FiPause, FiPlay } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectLoaded, selectPlaying, setSourceUrlAndPlay, playPause } from "../../features/player/playerSlice"
import { selectQueueItems, selectCurrentItem, setCurrentItem } from "../../features/queue/queueSlice"
import { BaseButton } from "../BaseButton"

export function PlayPauseButton() {
    const loaded = useAppSelector(selectLoaded)
    
    const items = useAppSelector(selectQueueItems)
    const current = useAppSelector(selectCurrentItem)

    const playing = useAppSelector(selectPlaying)

    const dispatch = useAppDispatch()

    const clickPlay = () => {
        if (items.length === 0) {
            return
        }

        if (current === null) {
            dispatch(setCurrentItem(items[0]))
            dispatch(setSourceUrlAndPlay(items[0].sourceUrl))
        } else {
            dispatch(playPause())
        }
    }

    return (
        <BaseButton onClick={clickPlay} disabled={!loaded && !items.length}>
            {playing ? <FiPause /> : <FiPlay />}
        </BaseButton>
    )
}