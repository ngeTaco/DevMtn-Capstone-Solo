import { Typography, Box } from "@mui/material"
import ContainerButtons from "./ContainerButtons.jsx"

export default function ContainerTile({ contentId, name, deleteContent }) {

    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                <Typography component="h2" variant="h6" >{name}</Typography>
            </section>
            <section>
                <ContainerButtons 
                    contentId={contentId}
                    deleteContent={deleteContent}
                />
            </section>
        </Box>
    )
}