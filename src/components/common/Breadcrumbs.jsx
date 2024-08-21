import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { useMatches } from 'react-router'
import { Link } from 'react-router-dom';

export default function BreadcrumbsNav() {
    let matches = useMatches();
    const crumbs = matches.filter((match) => Boolean(match.handle?.crumb))
    .map((match) => 
        { 
            console.log("match", match.handle.navTo)
            return {
                crumb: match.handle.crumb(match.data),
                navTo: match.handle.navTo
            }
        })
    return (
        <Box m={2}>
            <Breadcrumbs
                separator={<NavigateNext />}
                maxItems={3}
            >
                {crumbs.map(( crumb, index) => (
                    <Link to={crumb.navTo} underline='hover' key={index}>{crumb.crumb}</Link> 
                ))} 
                {/* to={'/'+crumb.replace(' ', '/')}  */}
                {/* <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Location</Link>
                <Link underline='hover' href='#'>Container</Link> */}
            </Breadcrumbs>
        </Box>
    )
}
