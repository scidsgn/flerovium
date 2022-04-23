import { useAppSelector } from "../../app/hooks"
import { selectCurrentTime } from "../../features/player/playerSlice"
import { TimeLabel } from "../TimeLabel"

export function TimeElapsedLabel() {
    const currentTime = useAppSelector(selectCurrentTime)
    
    return (
        <TimeLabel time={currentTime} />
    )
}