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
        },

        "protogon": {
            title: "PROTOGON",
            artistId: "sci",
            albumId: "protogon",

            sourceUrl: "audio/protogon.mp3",

            trackNo: null
        },
        "exodus": {
            title: "EXODUS",
            artistId: "sci",
            albumId: "exodus",

            sourceUrl: "audio/exodus.mp3",

            trackNo: null
        },
        "xineotron": {
            title: "XI-NEOTRON",
            artistId: "sci",
            albumId: "xineotron",

            sourceUrl: "audio/xineotron.mp3",

            trackNo: null
        },

        "silence": {
            title: "shhh...",
            artistId: "shh",
            albumId: "silence",

            sourceUrl: "audio/silence.mp3",

            trackNo: null
        },
    },
    artists: {
        "osc1llator": {
            name: "OSC1LLATOR"
        },
        "sci": {
            name: "sci"
        },
        "shh": {
            name: "Shhh....."
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
        },
        "protogon": {
            title: "PROTOGON",
            
            artistId: "sci",

            coverUrl: "cover/protogon.png",

            tracks: [
                "protogon"
            ]
        },
        "exodus": {
            title: "EXODUS",
            
            artistId: "sci",

            coverUrl: "cover/exodus.png",

            tracks: [
                "exodus"
            ]
        },
        "xineotron": {
            title: "XI-NEOTRON",
            
            artistId: "sci",

            coverUrl: "cover/xineotron.png",

            tracks: [
                "xineotron"
            ]
        },

        "silence": {
            title: "SHHHH....",
            
            artistId: "shh",

            coverUrl: "cover/silence.png",

            tracks: [
                "silence"
            ]
        }
    }
}