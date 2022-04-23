import { useAppSelector } from "../../../app/hooks"
import { selectLibrary } from "../../../features/library/librarySlice"
import { LibraryTrack } from "../../../features/library/LibraryTrack"

export function LibraryTracksPage() {
    const library = useAppSelector(selectLibrary)

    return (
        <>
            {
                Object.keys(library.tracks).map(
                    key => <LibraryTrack 
                        key={key} track={library.tracks[key]}
                    />
                )
            }
        </>
    )
}