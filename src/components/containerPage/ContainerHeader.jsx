import { Button } from '@mui/material';
import { ArrowBack, Add } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function ContainerHeader({ containerId, newContent }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="BodyHeader">
                <Button
                    color='primary'
                    variant='outlined'
                    size='large'
                    onClick={() => {
                        dispatch({ type: 'SHOW_CONTAINER'})
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