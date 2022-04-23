import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectDuration, selectCurrentTime, seek } from "../../features/player/playerSlice"
import { DoubleSlider } from "../DoubleSlider"

export function SeekSlider() {
    const duration = useAppSelector(selectDuration)
    const currentTime = useAppSelector(selectCurrentTime)

    const dispatch = useAppDispatch()

    const changeSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(seek(+e.target.value))
    }
    
    return (
        <DoubleSlider
            min={0} max={duration}
            value={currentTime}
            onChange={changeSeek}
        />
    )
}