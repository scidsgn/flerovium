import "./Panel.css"

export function Panel(props: {
    children?: React.ReactNode,
    className?: string
}) {
    return (
        <div className={`panel ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}