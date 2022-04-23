import { Panel } from "../../components/Panel"
import { PlayPauseButton } from "../../components/commands/PlayPauseButton"
import { PreviousButton } from "../../components/commands/PreviousButton"
import { NextButton } from "../../components/commands/NextButton"
import { SeekSlider } from "../../components/sliders/SeekSlider"
import { TimeElapsedLabel } from "../../components/labels/TimeElapsedLabel"
import { DurationLabel } from "../../components/labels/DurationLabel"
import { VolumeSlider } from "../../components/sliders/VolumeSlider"
import { MuteButton } from "../../components/commands/MuteButton"
import { TrackTitleLabel } from "../../components/labels/TrackTitleLabel"
import { TrackArtistLabel } from "../../components/labels/TrackArtistLabel"
import { CurrentCoverArt } from "../../components/images/CurrentCoverArt"

import "./PlayerPanel.css"

export function PlayerPanel() {
    return (
        <Panel className="player-panel">
            <div className="player-panel-cover-art">
                <CurrentCoverArt />
            </div>

            <div className="player-panel-track">
                <p className="player-panel-track-title">
                    <TrackTitleLabel />
                </p>
                <p className="player-panel-track-artist">
                    <TrackArtistLabel />
                </p>
            </div>
            
            <div className="player-panel-seeker">
                <TimeElapsedLabel />
                <SeekSlider />
                <DurationLabel />
            </div>

            <div className="player-panel-transport">
                <PreviousButton />
                <PlayPauseButton />
                <NextButton />
            </div>

            <div className="player-panel-volume">
                <VolumeSlider />
                <MuteButton />
            </div>
        </Panel>
    )
}