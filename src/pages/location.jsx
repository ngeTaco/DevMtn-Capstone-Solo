import { useLoaderData } from 'react-router-dom'
import Header from '../components/common/Header.jsx'
import LocationBody from '../components/locationPage/LocationBody.jsx'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Location() {

    const locationId = useLoaderData().locationId
    const [showContainer, setShowContainer] = useState(true)
    const urlArray = window.location.href.split('/')

    //console.log(urlArray)
    useEffect(() => {
        if (urlArray.includes('container')) {
            setShowContainer(false)
        }
    }, [])

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
                context={setShowContainer}
            />

        </div>
    )
}

export default Location

// useState showparentmisc inside of useEffect vanilla javascript to read url,
// if url shows container, set parent to false,
// if not, keep parent to true

// const currentUrl = window.location.href;
// console.log(currentUrl);