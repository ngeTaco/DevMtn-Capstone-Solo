import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function LocationButtons({ containerId, deleteContainer }) {
    return (
        <div className="TileButtons">
            <Link to={`container/${containerId}`}>
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
