import { Typography, Box } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import HomeButtons from "./HomeButtons.jsx"

export default function HomeTile({ locationId, name }) {
    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                <CirclePlaceHolder />
                <Typography component="h2" variant="h4" >{name}</Typography>
            </section>
            <section>
                <HomeButtons 
                    locationId={locationId}
                />
            </section>
        </Box>
    )
}