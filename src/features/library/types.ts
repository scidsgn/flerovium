export type LibraryType = {
    tracks: {
        [id: string]: LibraryTrackType
    },
    artists: {
        [id: string]: LibraryArtistType
    },
    albums: {
        [id: string]: LibraryAlbumType
    }
}

export type LibraryTrackType = {
    title: string,

    artistId: string | null,
    albumId: string | null,

    trackNo: number | null,

    sourceUrl: string
}

export type LibraryAlbumType = {
    title: string,

    artistId: string | null,

    coverUrl: string,

    tracks: string[]
}

export type LibraryArtistType = {
    name: string
}