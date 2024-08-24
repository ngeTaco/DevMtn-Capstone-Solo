import { Typography, Box, TextField } from "@mui/material"
import { CirclePlaceHolder } from "../common/Placeholders.jsx"
import HomeButtons from "./HomeButtons.jsx"
import { useState } from "react"

export default function HomeTile({ locationId, name, deleteLocation, changeLocationName }) {

    const [isEditable, setIsEditable] = useState(true)
    const [locationName, setLocationName] = useState(name)

    return (
        <Box sx={{
            bgcolor: 'grey.100',
            border: '2px solid grey',
            padding: '1rem',
        }}>
            <section>
                <CirclePlaceHolder />
                {isEditable ?
                    <Typography component="h2" variant="h6" >{name}</Typography>
                    :
                    <TextField
                        variant="filled"
                        type="text"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
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