import { Typography, Box } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import HomeButtons from "./HomeButtons.jsx"

export default function HomeTile(props) {
    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                <CirclePlaceHolder />
                <Typography component="h2" variant="h4" >Location01</Typography>
            </section>
            <section>
                <HomeButtons />
            </section>
        </Box>
    )
}