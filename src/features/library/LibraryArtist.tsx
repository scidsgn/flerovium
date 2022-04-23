import { LibraryArtistType } from "./types"

import "./LibraryArtist.css"
import { useAppSelector } from "../../app/hooks"
import { selectLibrary } from "./librarySlice"

export function LibraryArtist(props: {
    artist: LibraryArtistType,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}) {
    const library = useAppSelector(selectLibrary)

    const id = Object.keys(library.artists).find(
        id => library.artists[id] === props.artist
    )
    
    const coverArtUrls = [
        "cover/default.png",
        "cover/default.png",
        "cover/default.png",
        ...Object.values(library.albums).filter(
            album => album.artistId === id
        ).map(
            album => album.coverUrl
        )
    ]

    return (
        <div className="library-artist" onClick={props.onClick}>
            <div className="library-artist-cover-flow">
                {
                    coverArtUrls.slice(coverArtUrls.length - 3, coverArtUrls.length).map((url, i) => <img src={url} key={i}/>)
                }
            </div>
            <p className="library-artist-name">
                {props.artist.name}
            </p>
        </div>
    )
}