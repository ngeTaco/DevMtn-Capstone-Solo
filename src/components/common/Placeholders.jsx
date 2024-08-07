import { Circle, SquareRounded } from '@mui/icons-material';
import { lightBlue, yellow } from '@mui/material/colors';

export function CirclePlaceHolder() {
    return (
        <Circle
            sx={{
                color: lightBlue[500],
                fontSize: 50
            }}
        />
    )
}

export function SquarePlaceHolder() {
    return (
        <SquareRounded
            sx={{
                color: yellow[500],
                fontSize: 50
            }}
        />
    )
}