import { Panel } from "../../components/Panel"
import { Queue } from "../../features/queue/Queue"

import "./QueuePanel.css"

export function QueuePanel() {
    return (
        <Panel className="queue-panel">
            <div className="queue-panel-queue">
                <Queue />
            </div>
        </Panel>
    )
}