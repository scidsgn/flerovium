import { FiSkipForward } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSourceUrlAndPlay } from "../../features/player/playerSlice"
import { selectNextItem, setCurrentItem } from "../../features/queue/queueSlice"
import { BaseButton } from "../BaseButton"

export function NextButton() {
    const next = useAppSelector(selectNextItem)

    const dispatch = useAppDispatch()

    const clickNext = () => {
        if (!next) {
            return
        }
        
        dispatch(setCurrentItem(next))
        dispatch(setSourceUrlAndPlay(next.sourceUrl))
    }

    return (
        <BaseButton disabled={next === null} onClick={clickNext}>
            <FiSkipForward />
        </BaseButton>
    )
}