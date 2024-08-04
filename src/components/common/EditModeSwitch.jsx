import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

export default function EditModeSwitch() {
    const [checked, setChecked] = useState(false)
    console.log("EditModeSwitch", { checked })
    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Box>
            <FormControlLabel
                label="Edit"
                control={
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                    />}
            />
        </Box>
    )
}
