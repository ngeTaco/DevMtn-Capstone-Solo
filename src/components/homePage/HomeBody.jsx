import { useEffect, useState } from "react";
import HomeTile from "./HomeTile";
import axios from "axios";

export default function HomeBody(props) {
    const [locationData, setLocationData] = useState([])

    const getLocations = () => {
        axios.get('http://localhost:8000/api/all/locations')
            .then(res => {
                setLocationData(Object.values({ ...res.data }))
            })
    }
    useEffect(
        getLocations, []
    )

    return (
        <article className="Home">
            {locationData.map((location) => {
                return (
                    <HomeTile
                    key={location.locationId}
                    locationId={location.locationId}
                    name={location.locationName}
                    />
                )
            })
            }

        </article>
    )
}