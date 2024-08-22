import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function HomeHeader({ newLocation }) {
    return (
        <div className="BodyHeader">
            <div></div>
            <Button
                color="secondary"
                variant='outlined'
                size='large'
                onClick={() => newLocation()}
            >
                <Add />
            </Button>
        </div>
    )
};