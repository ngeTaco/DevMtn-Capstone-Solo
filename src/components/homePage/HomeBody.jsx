import { Typography } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import { EditIcon, ForwardIcon, SaveIcon } from "../common/Icons.jsx"

export default function HomeBody(props) {
    return (
        <article>
            <div className="Location-Tile">
                <CirclePlaceHolder />
                <Typography component="h2" variant="h4" >Location01</Typography>
                <ForwardIcon />
                <EditIcon />
                <SaveIcon />
            </div>
            <div className="Location-Tile">
                <CirclePlaceHolder />
                <Typography component="h2" variant="h4" >Location02</Typography>
                <ForwardIcon />
                <EditIcon />
                <SaveIcon />
            </div>
            <div className="Location-Tile">
                <CirclePlaceHolder />
                <Typography component="h2" variant="h4" >Location03</Typography>
                <ForwardIcon />
                <EditIcon />
                <SaveIcon />
            </div>
        </article>
    )
}