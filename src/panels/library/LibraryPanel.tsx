import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { BaseButton } from "../../components/BaseButton"
import { Panel } from "../../components/Panel"
import { LibraryPageType, selectLibrary } from "../../features/library/librarySlice"
import { LibraryArtistsPage } from "./pages/LibraryArtistsPage"
import { LibraryTracksPage } from "./pages/LibraryTracksPage"
import { LibraryAlbumsPage } from "./pages/LibraryAlbumsPage"
import { LibraryAlbumType, LibraryArtistType, LibraryTrackType } from "../../features/library/types"
import { LibraryAlbumPage } from "./pages/LibraryAlbumPage"

import "./LibraryPanel.css"
import { LibraryArtistPage } from "./pages/LibraryArtistPage"

export function LibraryPanel() {
    const library = useAppSelector(selectLibrary)

    const dispatch = useAppDispatch()

    const [page, setPage] = useState(LibraryPageType.tracks)
    const [item, setItem] = useState(null as (LibraryTrackType | LibraryArtistType | LibraryAlbumType | null))

    const setAlbumPage = (album: LibraryAlbumType) => {
        setItem(album)
        setPage(LibraryPageType.album)
    }

    const setArtistPage = (artist: LibraryArtistType) => {
        setItem(artist)
        setPage(LibraryPageType.artist)
    }

    return (
        <Panel className="library-panel">
            <header className="library-panel-header">
                <BaseButton
                    checked={page === LibraryPageType.tracks}
                    onClick={() => setPage(LibraryPageType.tracks)}
                >
                    Tracks
                </BaseButton>
                <BaseButton
                    checked={page === LibraryPageType.artists}
                    onClick={() => setPage(LibraryPageType.artists)}
                >
                    Artists
                </BaseButton>
                <BaseButton
                    checked={page === LibraryPageType.albums}
                    onClick={() => setPage(LibraryPageType.albums)}
                >
                    Albums
                </BaseButton>
            </header>
            <div className="library-panel-content">
                {
                    ({
                        [LibraryPageType.tracks]: <LibraryTracksPage />,
                        [LibraryPageType.artists]: <LibraryArtistsPage onArtist={setArtistPage} />,
                        [LibraryPageType.albums]: <LibraryAlbumsPage onAlbum={setAlbumPage} />,
                        
                        [LibraryPageType.album]: <LibraryAlbumPage album={item as LibraryAlbumType} />,
                        [LibraryPageType.artist]: <LibraryArtistPage artist={item as LibraryArtistType} />
                    } as any)[page]
                }
            </div>
        </Panel>
    )
}