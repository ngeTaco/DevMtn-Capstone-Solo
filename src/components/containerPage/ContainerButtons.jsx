import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete } from '@mui/icons-material';

export default function ContainerButtons({ contentId, deleteContent }) {
    return (
        <div className="TileButtons">
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
                onClick={() => deleteContent(contentId)}
            >
                <Delete />
            </IconButton>
        </div>
    )
};