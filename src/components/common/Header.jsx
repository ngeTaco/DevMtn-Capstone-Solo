import { IconButton, Typography } from "@mui/material"
import { Warehouse } from "@mui/icons-material"
import { useNavigate } from "react-router"


export default function Header(props) {

    const navigate = useNavigate()

    return (
        <header>
            <article className="Header">
                <IconButton
                    onClick={() =>
                        navigate('/')
                    }
                >
                    <Warehouse
                        sx={{ fontSize: 100 }}
                        color="primary"
                    />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h2"
                >
                    Storage Tracker
                </Typography>
            </article>
        </header>
    )
}