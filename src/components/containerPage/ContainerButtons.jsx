import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete } from '@mui/icons-material';

export default function ContainerButtons({ contentId, deleteContent }) {
    return (
        <>
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

            <IconButton color="warning" onClick={() => deleteContent(contentId)}>
                <Delete />
            </IconButton>
        </>
    )
};