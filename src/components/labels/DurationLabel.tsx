import { useAppSelector } from "../../app/hooks"
import { selectDuration } from "../../features/player/playerSlice"
import { TimeLabel } from "../TimeLabel"

export function DurationLabel() {
    const duration = useAppSelector(selectDuration)
    
    return (
        <TimeLabel time={duration} />
    )
}