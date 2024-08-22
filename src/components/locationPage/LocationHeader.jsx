import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowBack, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function LocationHeader({ containerId }) {
    return (
        <>
            <Link to={'/'}>
                <Button
                    color='primary'
                    variant='outlined'
                    size='large'
                >
                    <ArrowBack />
                </Button>
            </Link>

            <Button
                color="secondary"
                variant='outlined'
                size='large'
            >
                <Add />
            </Button>
        </>
    )
};