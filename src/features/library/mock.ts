import { LibraryType } from "./types"

export const mockLibrary: LibraryType = {
    tracks: {
        "noise1": {
            title: "Noise I",
            artistId: "osc1llator",
            albumId: "noise",

            sourceUrl: "audio/noise/noise1.mp3",

            trackNo: null
        },
        "noise2": {
            title: "Noise II",
            artistId: "osc1llator",
            albumId: "noise",

            sourceUrl: "audio/noise/noise2.mp3",

            trackNo: null
        }
    },
    artists: {
        "osc1llator": {
            name: "OSC1LLATOR"
        }
    },
    albums: {
        "noise": {
            title: "NOISE",
            
            artistId: "osc1llator",

            coverUrl: "cover/noise.png",

            tracks: [
                "noise1",
                "noise2"
            ]
        }
    }
}