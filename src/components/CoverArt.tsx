import "./CoverArt.css"

export function CoverArt(props: {
    image: string
}) {
    return (
        <img className="cover-art" src={props.image} />
    )
}