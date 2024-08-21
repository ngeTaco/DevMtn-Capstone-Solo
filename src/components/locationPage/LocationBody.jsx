import { useEffect, useState } from "react";
import LocationTile from "./LocationTile.jsx";
import axios from "axios";

export default function LocationBody(props) {

    const locationId = props.locationId
    const [containerData, setContainerData] = useState([])

    const getContainers = () => {
        axios.get(`http://localhost:8000/api/containers/${locationId}`)
            .then(res => {
                setContainerData(Object.values({ ...res.data }))
            })
    }
    useEffect(
        getContainers, []
    )

    return (
        <article className="Home">
            {containerData.map((container) => {
                return (
                    <LocationTile
                        key={container.containerId}
                        containerId={container.containerId}
                        name={container.containerName}
                    />
                )
            })
            }

        </article>
    )
}