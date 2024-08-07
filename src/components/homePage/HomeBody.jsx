import { Typography, Box } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import HomeButtons from "./HomeButtons.jsx"

export default function HomeBody(props) {
    return (
        <article className="Home">
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
            <Box sx={{
                bgcolor: 'grey.100',
                border: '2px solid grey',
                padding: '1rem',
            }}>
                <CirclePlaceHolder />
                <Typography component="h2" variant="h4" >Location02</Typography>
                <HomeButtons />
            </Box>
        </article>
    )
}