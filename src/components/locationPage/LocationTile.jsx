import { useState } from "react"
//Import Components
import { Typography, Box, TextField } from "@mui/material"
import { SquarePlaceHolder } from "../common/Placeholders.jsx"
import LocationButtons from "./LocationButtons.jsx"


export default function LocationTile({ containerId, name, deleteContainer, changeContainerName }) {

    const [isEditable, setIsEditable] = useState(true)
    const [containerName, setContainerName] = useState(name)

    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
            borderRadius: 10,
        }}>
            <section>
                <SquarePlaceHolder />
                {isEditable ?
                    <Typography
                        component="h2"
                        variant="h6"
                    >
                        {name}
                    </Typography>
                    :
                    <TextField
                        variant="filled"
                        type="text"
                        value={containerName}
                        sx={{
                            width: '500%',
                            borderRadius: 1
                        }}
                        label="Container Name"
                        onChange={(e) =>
                            setContainerName(e.target.value)}
                    />
                }
            </section>
            <section>
                <LocationButtons
                    containerId={containerId}
                    deleteContainer={deleteContainer}
                    isEditableState={{ isEditable, setIsEditable }}
                    containerName={{ containerName }}
                    changeContainerName={changeContainerName}
                />
            </section>
        </Box>
    )
}