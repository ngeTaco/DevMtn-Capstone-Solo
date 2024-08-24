import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function LocationButtons({ containerId, deleteContainer }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="TileButtons">
                <Button
                    color='primary'
                    variant='outlined'
                    size='large'
                    sx={{ ml: 2 }}
                    onClick={() => {
                        dispatch({ type: 'SHOW_CONTAINER'})
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
            >
                <Edit />
            </Button>

            <IconButton
                color="secondary"
                sx={{ ml: 2 }}
            >
                <Save />
            </IconButton>

            <IconButton
                color="warning"
                sx={{ ml: 2 }}
                onClick={() => deleteContainer(containerId)}
            >
                <Delete />
            </IconButton>
        </div>
    )
};
