import { useLoaderData } from 'react-router-dom'
import Header from '../components/common/Header.jsx'


function Location() {
    const locationId = useLoaderData().locationId
    console.log("locationid", locationId)

    return (
        <div>

            <Header />
            <div><p>STUFF AND THINGS</p></div>

        </div>
    )
}

export default Location