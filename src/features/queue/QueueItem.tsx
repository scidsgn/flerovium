import { FiArrowDown, FiArrowUp, FiTrash } from "react-icons/fi"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { BaseButton } from "../../components/BaseButton"
import { setSourceUrlAndPlay } from "../player/playerSlice"
import { deleteItem, moveItemDown, moveItemUp, QueueTrack, selectCurrentItem, setCurrentItem } from "./queueSlice"

import "./QueueItem.css"
import React from "react"
import { QueuePlaybackIndicator } from "./QueuePlaybackIndicator"

export function QueueItem(props: {
    item: QueueTrack
}) {
    const currentItem = useAppSelector(selectCurrentItem)

    const dispatch = useAppDispatch()

    const clickPlay = () => {
        dispatch(setCurrentItem(props.item))
        dispatch(setSourceUrlAndPlay(props.item.sourceUrl))
    }

    const clickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(deleteItem(props.item))
    }

    const clickMoveDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(moveItemDown(props.item))
    }
    const clickMoveUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(moveItemUp(props.item))
    }
    
    return (
        <div className="queue-item" onDoubleClick={clickPlay}>
            {
                (currentItem && currentItem.index === props.item.index) ? (
                    <QueuePlaybackIndicator item={props.item} />
                ) : (
                    <div className="queue-item-index">
                        {props.item.index + 1}
                    </div>
                )
            }           

            <div className="queue-item-track">
                <b>{props.item.title}</b><br />
                {props.item.artist}
            </div>


            <BaseButton onClick={clickMoveUp} disabled={props.item.first}>
                <FiArrowUp />
            </BaseButton>
            <BaseButton onClick={clickMoveDown} disabled={props.item.last}>
                <FiArrowDown />
            </BaseButton>

            <BaseButton onClick={clickDelete} disabled={props.item.index === currentItem?.index}>
                <FiTrash />
            </BaseButton>
        </div>
    )
}