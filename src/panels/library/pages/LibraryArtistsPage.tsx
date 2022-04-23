import { useAppSelector } from "../../../app/hooks"
import { LibraryArtist } from "../../../features/library/LibraryArtist"
import { selectLibrary } from "../../../features/library/librarySlice"
import { LibraryArtistType } from "../../../features/library/types"

import "./LibraryArtistsPage.css"

export function LibraryArtistsPage(
    props: {
        onArtist: (artist: LibraryArtistType) => void
    }
) {
    const library = useAppSelector(selectLibrary)

    const onClick = (artist: LibraryArtistType) => {
        return () => {
            props.onArtist(artist)
        }
    }
    
    return (
        <div className="library-artists-list">
            {
                Object.keys(library.artists).map(
                    key => <LibraryArtist
                        key={key} artist={library.artists[key]} onClick={onClick(library.artists[key])}
                    />
                )
            }
        </div>
    )
}