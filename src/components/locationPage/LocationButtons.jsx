import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function LocationButtons({ containerId }) {
    return (
        <>
            <Link to={`container/${containerId}`}>
                <Button
                    color='primary'
                    variant='outlined'
                    size='large'
                >
                    <ArrowForward />
                </Button>
            </Link>

            <Button
                color="secondary"
                variant='outlined'
                size='large'
            >
                <Edit />
            </Button>

            <IconButton color="secondary">
                <Save />
            </IconButton>

            <IconButton color="warning">
                <Delete />
            </IconButton>
        </>
    )
};