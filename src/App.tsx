import React from "react"
import "./App.css"

import { Player } from "./features/player/Player"

import { PlayerPanel } from "./panels/player/PlayerPanel"
import { QueuePanel } from "./panels/queue/QueuePanel"
import { LibraryPanel } from "./panels/library/LibraryPanel"

function App() {
    return (
        <div>
            <Player />
            <div className="app">
                <PlayerPanel />
                <LibraryPanel />
                <QueuePanel />
            </div>
        </div>
    );
}

export default App;
