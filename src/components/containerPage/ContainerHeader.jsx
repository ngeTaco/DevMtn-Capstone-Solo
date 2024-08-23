import { Button } from '@mui/material';
import { ArrowBack, Add } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

export default function ContainerHeader({ containerId, newContent, setShowContainer }) {
    const navigate = useNavigate();

    return (
        <div className="BodyHeader">
                <Button
                    color='primary'
                    variant='outlined'
                    size='large'
                    onClick={() => {
                        // setShowContainer(true)
                        navigate(-1)
                    }}
                >
                    <ArrowBack />
                </Button>

            <Button
                color="secondary"
                variant='outlined'
                size='large'
                onClick={() => newContent(containerId)}
            >
                <Add />
            </Button>
        </div>
    )
};