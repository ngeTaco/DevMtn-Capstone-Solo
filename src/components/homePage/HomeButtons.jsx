import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function HomeButtons({ locationId, deleteLocation, isEditableState, changeLocationName, locationName }) {
    const { isEditable, setIsEditable } = isEditableState

    return (
        <div className="TileButtons">
            {isEditable ?
                <>
                    <Link to={`location/${locationId}`}>
                        <Button
                            color='primary'
                            variant='outlined'
                            size='large'
                            sx={{ ml: 2 }}
                        >
                            <ArrowForward />
                        </Button>
                    </Link>

                    <Button
                        color="secondary"
                        variant='outlined'
                        size='large'
                        sx={{ ml: 2 }}
                        onClick={() => {
                            setIsEditable(false)}}
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
                            setIsEditable(true)}}
                    >
                        <Save />
                    </IconButton>

                    <IconButton
                        color="warning"
                        sx={{ ml: 2 }}
                        onClick={() => deleteLocation(locationId)}>
                        <Delete />
                    </IconButton>
                </>
            }
        </div>
    )
};