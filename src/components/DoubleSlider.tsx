import React from "react"
import "./DoubleSlider.css"

export function DoubleSlider(props: {
    value: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    
    min?: number,
    max?: number,
    step?: number
}) {
    const v = (props.value - (props.min ?? 0)) / ((props.max ?? 1) - (props.min ?? 0)) * 100
    const bgStyle = {
        background: `linear-gradient(to right, var(--accent) ${v}%, #fff3 ${v + 0.1}%)`
    }

    return (
        <div className="double-slider">
            <div
                className="double-slider-fill" style={bgStyle}
            ></div>
            <input
                className="double-slider-ghost"
                type="range"
                min={props.min} max={props.max} step={props.step}
                value={props.value}
                readOnly tabIndex={-1}                
            />
            <input
                className="double-slider-seek"
                type="range"
                min={props.min} max={props.max} step={props.step}
                onChange={props.onChange}
            />
        </div>
    )
}