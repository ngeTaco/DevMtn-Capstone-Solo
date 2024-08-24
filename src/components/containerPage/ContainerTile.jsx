import { Typography, Box, TextField } from "@mui/material"
import ContainerButtons from "./ContainerButtons.jsx"
import { useState } from "react"

export default function ContainerTile({ contentId, name, deleteContent, changeContentName }) {

    const [isEditable, setIsEditable] = useState(true)
    const [contentName, setContentName] = useState(name)

    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                {isEditable ?
                    <Typography component="h2" variant="h6" >{name}</Typography>
                    :
                    <TextField
                        variant="filled"
                        type="text"
                        value={contentName}
                        onChange={(e) => setContentName(e.target.value)}
                    />
                }
            </section>
            <section>
                <ContainerButtons
                    contentId={contentId}
                    deleteContent={deleteContent}
                    isEditableState={{ isEditable, setIsEditable }}
                    contentName={{ contentName }}
                    changeContentName={changeContentName}
                />
            </section>
        </Box>
    )
}