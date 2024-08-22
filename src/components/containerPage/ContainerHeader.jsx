import { Button } from '@mui/material';
import { ArrowBack, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ContainerHeader({ containerId }) {
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