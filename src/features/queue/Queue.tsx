import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { QueueItem } from "./QueueItem"
import { addItem, selectQueueItems } from "./queueSlice"

import "./Queue.css"
import { BaseButton } from "../../components/BaseButton"
import { FiPlus } from "react-icons/fi"

export function Queue() {
    const items = useAppSelector(selectQueueItems)

    const dispatch = useAppDispatch()
    
    return (
        <div className="queue">
            {items.map(
                (item, i) => <QueueItem key={i} item={item} />
            )}
        </div>
    )
}