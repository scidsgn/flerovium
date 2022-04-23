import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectVolume, selectMuted, volume } from "../../features/player/playerSlice"
import { DoubleSlider } from "../DoubleSlider"

export function VolumeSlider() {
    const vol = useAppSelector(selectVolume)
    const muted = useAppSelector(selectMuted)

    const dispatch = useAppDispatch()
    
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(volume(+e.target.value))
    }

    return (
        <DoubleSlider
            min={0} max={1} step={0.01}
            value={vol * (muted ? 0 : 1)}
            onChange={changeVolume}
        />
    )
}