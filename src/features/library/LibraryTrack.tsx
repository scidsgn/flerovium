import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CoverArt } from "../../components/CoverArt"
import { selectLibrary } from "./librarySlice"
import { LibraryTrackType } from "./types"
import { BaseButton } from "../../components/BaseButton"
import { FiPlus } from "react-icons/fi"

import "./LibraryTrack.css"
import { addItem, addItemAndSetCurrent } from "../queue/queueSlice"
import { setSourceUrlAndPlay } from "../player/playerSlice"

export function LibraryTrack(props: {
    track: LibraryTrackType
}) {
    const library = useAppSelector(selectLibrary)

    const dispatch = useAppDispatch()
    
    const { track } = props

    const title = track.title

    let artist = "Unknown Artist"
    if (track.artistId) {
        artist = library.artists[track.artistId].name
    }

    let coverUrl = "cover/default.png"
    let album = "Unknown Artist"
    if (track.albumId) {
        album = library.albums[track.albumId].title
        coverUrl = library.albums[track.albumId].coverUrl
    }

    const enqueueTrack = () => {
        dispatch(addItem({
            index: -1,

            title, artist, coverUrl,

            sourceUrl: track.sourceUrl,

            first: false,
            last: false
        }))
    }

    const enqueueAndPlayTrack = () => {
        dispatch(addItemAndSetCurrent({
            index: -1,

            title, artist, coverUrl,

            sourceUrl: track.sourceUrl,

            first: false,
            last: false
        }))
        dispatch(setSourceUrlAndPlay(track.sourceUrl))
    }

    return (
        <div className="library-track" onDoubleClick={enqueueAndPlayTrack}>
            <CoverArt image={coverUrl} />

            <p className="library-track-title">
                {title}
            </p>
            <p className="library-track-artist">
                {artist}
            </p>
            <p className="library-track-album">
                {album}
            </p>

            <BaseButton onClick={enqueueTrack}>
                <FiPlus />
            </BaseButton>
        </div>
    )
}
