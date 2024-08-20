import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { useMatches } from 'react-router'

export default function BreadcrumbsNav() {
    let matches = useMatches();
    const crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data))
    return (
        <Box m={2}>
            <Breadcrumbs
                separator={<NavigateNext />}
                maxItems={3}
            >
                {crumbs.map((crumb, index) => (
                    <Link underline='hover' key={index}>{crumb}</Link> 
                ))} 
                {/* to={'/'+crumb.replace(' ', '/')}  */}
                {/* <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Location</Link>
                <Link underline='hover' href='#'>Container</Link> */}
            </Breadcrumbs>
        </Box>
    )
}
