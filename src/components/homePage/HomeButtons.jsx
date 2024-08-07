import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete, ArrowForward } from '@mui/icons-material';

export default function HomeButtons() {
    return (
        <>
            <Button
            color='primary'
            variant='outlined'
            size='large'
            >
                <ArrowForward />
            </Button>

            <IconButton color="secondary">
                <Edit />
            </IconButton>

            <IconButton color="secondary">
                <Save />
            </IconButton>

            <IconButton color="warning">
                <Delete />
            </IconButton>
        </>
    )
};