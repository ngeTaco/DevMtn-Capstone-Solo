import { useNavigate } from 'react-router';
// Import Components
import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';


export default function HomeButtons({ locationId, deleteLocation, isEditableState, changeLocationName, locationName }) {

    const { isEditable, setIsEditable } = isEditableState
    const navigate = useNavigate()

    return (
        <div className="TileButtons">
            {isEditable ?
                <>
                    <Button
                        color='primary'
                        variant='outlined'
                        size='large'
                        sx={{ ml: 2 }}
                        onClick={() =>
                            navigate(`location/${locationId}`)
                        }
                    >
                        <ArrowForward />
                    </Button>

                    <Button
                        color="secondary"
                        variant='outlined'
                        size='large'
                        sx={{ ml: 2 }}
                        onClick={() => {
                            setIsEditable(false)
                        }}
                    >
                        <Edit />
                    </Button>
                </>
                :
                <>
                    <IconButton
                        color="secondary"
                        sx={{ ml: 2 }}
                        onClick={() => {
                            changeLocationName(locationId, locationName)
                            setIsEditable(true)
                        }}
                    >
                        <Save />
                    </IconButton>

                    <IconButton
                        color="warning"
                        sx={{ ml: 2 }}
                        onClick={() =>
                            deleteLocation(locationId)}>
                        <Delete />
                    </IconButton>
                </>
            }
        </div>
    )
};