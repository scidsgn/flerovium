import { FiPlus } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { BaseButton } from "../../../components/BaseButton";
import { selectLibrary } from "../../../features/library/librarySlice";
import { LibraryTrack } from "../../../features/library/LibraryTrack";
import { LibraryAlbumType } from "../../../features/library/types";
import { addItem } from "../../../features/queue/queueSlice";
import { LibraryHeader } from "../LibraryHeader";

export function LibraryAlbumPage(props: {
    album: LibraryAlbumType
}) {
    const library = useAppSelector(selectLibrary)

    const dispatch = useAppDispatch()
    
    const { album } = props

    const { title, tracks } = album
    const coverUrl = album.coverUrl ?? "cover/default.png"
    
    let artist = "Unknown Artist"
    if (album.artistId) {
        artist = library.artists[album.artistId].name
    }

    const enqueueAlbum = () => {        
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
        <>
            <LibraryHeader coverUrl={coverUrl}>
                <h1>{title}</h1>

                <div>
                    <BaseButton onClick={enqueueAlbum}>
                        <FiPlus />
                        <span>Add to Queue</span>
                    </BaseButton>
                </div>
            </LibraryHeader>
            {
                tracks.map(
                    key => <LibraryTrack 
                        key={key} track={library.tracks[key]}
                    />
                )
            }
        </>
    )
}