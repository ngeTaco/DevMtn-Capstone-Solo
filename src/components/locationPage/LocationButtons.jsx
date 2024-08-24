import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Import Components
import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';

export default function LocationButtons({ containerId, deleteContainer, isEditableState, changeContainerName, containerName }) {

    const { isEditable, setIsEditable } = isEditableState
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="TileButtons">
            {isEditable ?
                <>
                    <Button
                        color='primary'
                        variant='outlined'
                        size='large'
                        sx={{ ml: 2 }}
                        onClick={() => {
                            dispatch({ type: 'SHOW_CONTAINER' })
                            navigate(`container/${containerId}`)
                        }}
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
                            changeContainerName(containerId, containerName)
                            setIsEditable(true)
                        }}
                    >
                        <Save />
                    </IconButton>

                    <IconButton
                        color="warning"
                        sx={{ ml: 2 }}
                        onClick={() =>
                            deleteContainer(containerId)}
                    >
                        <Delete />
                    </IconButton>
                </>
            }
        </div>
    )
};
