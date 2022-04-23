export function TimeLabel(props: {
    time: number
}) {
    let timeString = ""
    let time = Math.floor(props.time)

    if (time > 3600) {
        // hrs
    }

    const minutes = Math.floor(time / 60)
    time -= minutes * 60

    timeString += `${minutes.toString().padStart(2, "0")}:${time.toString().padStart(2, "0")}`

    return <span>{timeString}</span>
}