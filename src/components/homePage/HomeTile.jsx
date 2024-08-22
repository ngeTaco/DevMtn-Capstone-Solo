import { Typography, Box } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import HomeButtons from "./HomeButtons.jsx"

export default function HomeTile({ locationId, name, deleteLocation }) {
    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                <CirclePlaceHolder />
                <Typography component="h2" variant="h6" >{name}</Typography>
            </section>
            <section>
                <HomeButtons 
                    locationId={locationId}
                    deleteLocation={deleteLocation}
                />
            </section>
        </Box>
    )
}