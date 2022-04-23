import { FiSkipBack } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSourceUrlAndPlay } from "../../features/player/playerSlice"
import { selectPreviousItem, setCurrentItem } from "../../features/queue/queueSlice"
import { BaseButton } from "../BaseButton"

export function PreviousButton() {
    const previous = useAppSelector(selectPreviousItem)

    const dispatch = useAppDispatch()

    const clickPrevious = () => {
        if (!previous) {
            return
        }
        
        dispatch(setCurrentItem(previous))
        dispatch(setSourceUrlAndPlay(previous.sourceUrl))
    }

    return (
        <BaseButton disabled={previous === null} onClick={clickPrevious}>
            <FiSkipBack />
        </BaseButton>
    )
}