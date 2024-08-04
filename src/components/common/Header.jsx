import { Typography } from "@mui/material"
import EditModeSwitch from "./EditModeSwitch.jsx"
import { AddIcon } from "./Icons.jsx"

export default function Header(props) {
    return (
        <header className="App-Header">
            <article>
                <Typography component="h1" variant="h2" >Storage Tracker</Typography>
                <p>Breadcrumbs / Placeholder</p>
                <div>
                    <EditModeSwitch />
                    <button><AddIcon /></button>
                </div>
            </article>
        </header>
    )
}