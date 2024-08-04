import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

export default function BreadcrumbsNav() {
    return (
        <Box m={2}>
            <Breadcrumbs
                separator={<NavigateNext />}
                maxItems={3}
            >
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Location</Link>
                <Link underline='hover' href='#'>Container</Link>
            </Breadcrumbs>
        </Box>
    )
}
