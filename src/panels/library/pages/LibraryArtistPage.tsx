import { title } from "process"
import { FiPlus } from "react-icons/fi"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { BaseButton } from "../../../components/BaseButton"
import { selectLibrary } from "../../../features/library/librarySlice"
import { LibraryTrack } from "../../../features/library/LibraryTrack"
import { LibraryArtistType } from "../../../features/library/types"
import { addItem } from "../../../features/queue/queueSlice"
import { LibraryHeader } from "../LibraryHeader"

export function LibraryArtistPage(
    props: {
        artist: LibraryArtistType
    }
) {
    const library = useAppSelector(selectLibrary)

    const dispatch = useAppDispatch()

    const { artist } = props
    const id = Object.keys(library.artists).find(
        id => library.artists[id] === props.artist
    )

    const tracks = Object.keys(library.tracks).filter(
        trackId => library.tracks[trackId].artistId === id
    )
    
    const coverArtUrls = [
        "cover/default.png",
        ...Object.values(library.albums).filter(
            album => album.artistId === id
        ).map(
            album => album.coverUrl
        )
    ]

    const enqueueArtist = () => {        
        tracks.forEach(trackId => {
            const track = library.tracks[trackId]

            let coverUrl = "cover/default.png"
            if (track.albumId) {
                coverUrl = library.albums[track.albumId].coverUrl
            }

            dispatch(addItem({
                index: -1,
    
                title: track.title,
                artist: artist.name, coverUrl,
    
                sourceUrl: track.sourceUrl,
    
                first: false,
                last: false
            }))
        })
    }

    return (
        <>
            <LibraryHeader coverUrl={coverArtUrls[coverArtUrls.length - 1]}>
                <h1>{artist.name}</h1>

                <div>
                    <BaseButton onClick={enqueueArtist}>
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