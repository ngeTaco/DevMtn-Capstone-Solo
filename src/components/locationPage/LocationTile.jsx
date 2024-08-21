import { Typography, Box } from "@mui/material"
import { SquarePlaceHolder } from "../common/Placeholders.jsx"
import LocationButtons from "./LocationButtons.jsx"

export default function LocationTile({ containerId, name }) {
    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                <SquarePlaceHolder />
                <Typography component="h2" variant="h6" >{name}</Typography>
            </section>
            <section>
                <LocationButtons 
                    containerId={containerId}
                />
            </section>
        </Box>
    )
}