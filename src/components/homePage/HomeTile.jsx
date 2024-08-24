import { useState } from "react"
// Import Components
import { Typography, Box, TextField } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import HomeButtons from "./HomeButtons.jsx"


export default function HomeTile({ locationId, name, deleteLocation, changeLocationName }) {

    const [isEditable, setIsEditable] = useState(true)
    const [locationName, setLocationName] = useState(name)

    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
            borderRadius: 10,
        }}>
            <section>
                <CirclePlaceHolder />
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
                        value={locationName}
                        sx={{
                            width: '500%',
                            borderRadius: 1
                        }}
                        label="Location Name"
                        onChange={(e) =>
                            setLocationName(e.target.value)}
                    />
                }
            </section>
            <section>
                <HomeButtons
                    locationId={locationId}
                    deleteLocation={deleteLocation}
                    isEditableState={{ isEditable, setIsEditable }}
                    locationName={{ locationName }}
                    changeLocationName={changeLocationName}
                />
            </section>
        </Box>
    )
}