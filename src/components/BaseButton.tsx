import React from "react"

import "./BaseButton.css"

export function BaseButton(props: {
    children?: React.ReactNode,
    disabled?: boolean,
    checked?: boolean,

    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any
}) {
    return (
        <button
            className={`base-button ${props.checked ? "checked" : ""}`}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}