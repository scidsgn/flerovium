import { useAppSelector } from "../../app/hooks"
import { selectCurrentItem } from "../../features/queue/queueSlice"

export function TrackArtistLabel() {
    const current = useAppSelector(selectCurrentItem)

    return <span>{current ? current.artist : ""}</span>
}