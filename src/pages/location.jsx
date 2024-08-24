import { useLoaderData } from 'react-router-dom'
import Header from '../components/common/Header.jsx'
import LocationBody from '../components/locationPage/LocationBody.jsx'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


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

// useState showparentmisc inside of useEffect vanilla javascript to read url,
// if url shows container, set parent to false,
// if not, keep parent to true

// const currentUrl = window.location.href;
// console.log(currentUrl);