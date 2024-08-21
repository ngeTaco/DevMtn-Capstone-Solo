import { Route, useLoaderData, Routes } from 'react-router-dom'
import Header from '../components/common/Header.jsx'
import LocationBody from '../components/locationPage/LocationBody.jsx'
import { Outlet } from 'react-router-dom'
import Container from './container.jsx'


function Location() {
    const locationId = useLoaderData().locationId

    return (
        <div>

            <Header />
            <LocationBody
                locationId={locationId}
            />
            <Outlet />
            {/* <Routes>
                <Route
                    path="container/:containerId"
                    element={<Container />}
                    loader={({ params }) => { console.log("loaderParams", params); return { containerId: params.containerId } }}
                />
            </Routes> */}

        </div>
    )
}

export default Location

// useState showparentmisc inside of useEffect vanilla javascript to read url, if it shows container, set parent to false, if not, keep parent to true

// const currentUrl = window.location.href;
// console.log(currentUrl);