import { CoverArt } from "../../components/CoverArt"

import "./LibraryHeader.css"

export function LibraryHeader(props: {
    coverUrl: string,
    children?: React.ReactNode
}) {
    return (
        <header className="library-header">
            <CoverArt image={props.coverUrl} />

            {props.children}
        </header>
    )
}