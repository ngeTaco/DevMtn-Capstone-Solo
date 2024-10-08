import { useEffect, useState } from "react";
import axios from "axios";
// Import Components
import HomeHeader from "./HomeHeader";
import HomeTile from "./HomeTile";

export default function HomeBody() {
    
    const [locationData, setLocationData] = useState([])

    // Get all Locations in db
    const getLocations = () => {
        axios.get('http://localhost:8000/api/all/locations')
            .then(res => {
                setLocationData(Object.values({ ...res.data }))
            })
    }
    useEffect(
        getLocations, []
    )

    // Delete the Containers in the selected Location
    const deleteLocationContainers = (locationId) => {
        axios.delete(`/api/containers/${locationId}`)
            .then(res => {
                getLocations()
            })
    }

    // Delete the selected Location 
    const deleteLocation = (locationId) => {
        axios.delete(`/api/location/${locationId}`)
            .then(res => {
                deleteLocationContainers(locationId)
            })
    }

    // Create new Location
    const newLocation = () => {
        axios.post('/api/location')
            .then(() => {
                getLocations()
            })
    }

    // Change a Location Name
    const changeLocationName = (locationId, locationName) => {
        axios.put(`/api/location/${locationId}`, locationName)
            .then(() => {
                getLocations()
            })
    }

    return (
        <article className="Home">
            <HomeHeader
                newLocation={newLocation}
            />
            {locationData.map((location) => {
                return (
                    <HomeTile
                        key={location.locationId}
                        locationId={location.locationId}
                        name={location.locationName}
                        deleteLocation={deleteLocation}
                        changeLocationName={changeLocationName}
                    />
                )
            })
            }
        </article>
    )
}