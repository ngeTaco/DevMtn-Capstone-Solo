import { useLoaderData } from 'react-router-dom'
import Header from '../components/common/Header.jsx'
import LocationBody from '../components/locationPage/LocationBody.jsx'
import { Outlet } from 'react-router-dom'


function Location() {
    const locationId = useLoaderData().locationId

    return (
        <div>

            <Header />
            <LocationBody
                locationId={locationId}
            />
        </div>
    )
}

export default Location