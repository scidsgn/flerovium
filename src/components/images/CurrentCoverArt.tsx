import { useAppSelector } from "../../app/hooks"
import { selectCurrentItem } from "../../features/queue/queueSlice"
import { CoverArt } from "../CoverArt"

export function CurrentCoverArt() {    
    const currentItem = useAppSelector(selectCurrentItem)

    return (
        <CoverArt image={currentItem ? currentItem.coverUrl : "cover/default.png"} />
    )
}