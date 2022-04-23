import { useAppSelector } from "../../app/hooks"
import { selectCurrentItem } from "../../features/queue/queueSlice"

export function TrackTitleLabel() {
    const current = useAppSelector(selectCurrentItem)

    return <span>{current ? current.title : ""}</span>
}