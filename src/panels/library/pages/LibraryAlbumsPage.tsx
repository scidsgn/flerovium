import { useAppSelector } from "../../../app/hooks"
import { LibraryAlbum } from "../../../features/library/LibraryAlbum"
import { selectLibrary } from "../../../features/library/librarySlice"
import { LibraryAlbumType } from "../../../features/library/types"

export function LibraryAlbumsPage(props: {
    onAlbum: (album: LibraryAlbumType) => void
}) {
    const library = useAppSelector(selectLibrary)

    const onClick = (album: LibraryAlbumType) => {
        return () => {
            props.onAlbum(album)
        }
    }
    
    return (
        <>
            {
                Object.keys(library.albums).map(
                    key => <LibraryAlbum
                        key={key} album={library.albums[key]} onClick={onClick(library.albums[key])}
                    />
                )
            }
        </>
    )
}