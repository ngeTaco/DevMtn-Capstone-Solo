import { useEffect, useState } from "react";
import LocationTile from "./LocationTile.jsx";
import axios from "axios";
import LocationHeader from "./LocationHeader.jsx";

export default function LocationBody(props) {

    const locationId = props.locationId
    const [containerData, setContainerData] = useState([])

    // Get and Set Container for the current Location
    const getContainers = () => {
        axios.get(`http://localhost:8000/api/containers/${locationId}`)
            .then(res => {
                setContainerData(Object.values({ ...res.data }))
            })
    }
    useEffect(() => {
        getContainers()
    }, [])

    // Delete the Contents in the selected Container
    const deleteContainerContents = (containerId) => {
        axios.delete(`/api/contents/${containerId}`)
            .then(res => {
                getContainers()
            })
    }

    // Delete the selected Container 
    const deleteContainer = (containerId) => {
        axios.delete(`/api/container/${containerId}`)
            .then(res => {
                deleteContainerContents(containerId)
            })
    }

    // Create new Container in the Location
    const newContainer = (locationId) => {
        axios.post('/api/container', { locationId })
        .then(() => {
            getContainers()
        })
    }

        // Change a Container Name
        const changeContainerName = (containerId, containerName) => {
            axios.put(`/api/container/${containerId}`, containerName)
                .then(() => {
                    getLocations()
                })
        }

    return (
        <article className="Home">
            <LocationHeader
            locationId={locationId}
            newContainer={newContainer}
            />
            {containerData.map((container) => {
                return (
                    <LocationTile
                        key={container.containerId}
                        containerId={container.containerId}
                        name={container.containerName}
                        deleteContainer={deleteContainer}
                        changeContainerName={changeContainerName}
                    />
                )
            })
            }

        </article>
    )
}