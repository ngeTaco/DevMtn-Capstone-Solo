import { Button, IconButton } from '@mui/material';
import { Edit, Save, Delete } from '@mui/icons-material';

export default function ContainerButtons({ contentId, deleteContent, isEditableState, changeContentName, contentName }) {

    const { isEditable, setIsEditable } = isEditableState

    return (
        <div className="TileButtons">
            {isEditable ?
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
                :
                <>
                    <IconButton
                        color="secondary"
                        sx={{ ml: 2 }}
                        onClick={() => {
                            changeContentName(contentId, contentName)
                            setIsEditable(true)}}
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
                </>
            }
        </div>
    )
};