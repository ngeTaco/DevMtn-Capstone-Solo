import { useLoaderData, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// Import Components
import Header from '../components/common/Header.jsx'
import LocationBody from '../components/locationPage/LocationBody.jsx'


function Location() {

    const locationId = useLoaderData().locationId
    const showContainer = useSelector((state) => state.showContainerPage)
    const dispatch = useDispatch()

    return (
        <div>
            {showContainer &&
                <>
                    <Header />
                    <LocationBody
                        locationId={locationId}
                    />
                </>
            }
            <Outlet
            />

        </div>
    )
}

export default Location