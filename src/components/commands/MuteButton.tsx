import { FiVolumeX, FiVolume, FiVolume2, FiVolume1 } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectVolume, selectMuted, toggleMute } from "../../features/player/playerSlice"
import { BaseButton } from "../BaseButton"

export function MuteButton() {
    const vol = useAppSelector(selectVolume)
    const muted = useAppSelector(selectMuted)

    const dispatch = useAppDispatch()

    const clickMute = () => {
        dispatch(toggleMute())
    }

    return (
        <BaseButton onClick={clickMute} checked={muted}>
            {
                muted ? <FiVolumeX /> : (
                    vol === 0 ? <FiVolume /> : (vol > 0.5 ? <FiVolume2 /> : <FiVolume1 />)
                )
            }
        </BaseButton>
    )
}