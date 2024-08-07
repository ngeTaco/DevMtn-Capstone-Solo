import { Typography } from "@mui/material"
import EditModeSwitch from "./EditModeSwitch.jsx"
import { AddIcon } from "./Icons.jsx"
import BreadcrumbsNav from "./Breadcrumbs.jsx"

export default function Header(props) {
    return (
        <header>
            <article>
                <Typography component="h1" variant="h2" >Storage Tracker</Typography>
                <BreadcrumbsNav />
                <div>
                    <EditModeSwitch />
                    <AddIcon />
                </div>
            </article>
        </header>
    )
}