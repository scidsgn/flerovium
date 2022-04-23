import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { CoverArt } from "../../components/CoverArt"
import { selectLibrary } from "./librarySlice"
import { LibraryAlbumType } from "./types"
import { FiPlus } from "react-icons/fi"
import { BaseButton } from "../../components/BaseButton"

import "./LibraryAlbum.css"
import { addItem } from "../queue/queueSlice"
import React from "react"

export function LibraryAlbum(props: {
    album: LibraryAlbumType,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}) {
    const library = useAppSelector(selectLibrary)

    const dispatch = useAppDispatch()

    const { album } = props

    const title = album.title
    const coverUrl = album.coverUrl ?? "cover/default.png"
    
    let artist = "Unknown Artist"
    if (album.artistId) {
        artist = library.artists[album.artistId].name
    }

    const enqueueAlbum = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        
        album.tracks.forEach(trackId => {
            const track = library.tracks[trackId]

            dispatch(addItem({
                index: -1,
    
                title: track.title,
                artist, coverUrl,
    
                sourceUrl: track.sourceUrl,
    
                first: false,
                last: false
            }))
        })
    }

    return (
        <div className="library-album" onClick={props.onClick}>
            <CoverArt image={coverUrl} />

            <p>{title}</p>
            <p className="library-album-artist">
                {artist}
            </p>

            <BaseButton onClick={enqueueAlbum}>
                <FiPlus />
            </BaseButton>
        </div>
    )
}