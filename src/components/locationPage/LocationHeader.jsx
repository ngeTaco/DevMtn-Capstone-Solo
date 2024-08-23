import { Button } from '@mui/material';
import { ArrowBack, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function LocationHeader({ locationId, newContainer }) {
    const navigate = useNavigate();

    return (
        <div className="BodyHeader">
                <Button
                    color='primary'
                    variant='outlined'
                    size='large'
                    onClick={() => navigate(-1)}
                >
                    <ArrowBack />
                </Button>

            <Button
                color="secondary"
                variant='outlined'
                size='large'
                onClick={() => newContainer(locationId)}
            >
                <Add />
            </Button>
        </div>
    )
};