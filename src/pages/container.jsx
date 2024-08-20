import { useLoaderData } from 'react-router-dom'
import Header from '../components/common/Header.jsx'


function Container() {
    const containerId = useLoaderData().containerId
    console.log("containerid", containerId)

    return (
        <div>

            <Header />
            <p>this is the container page</p>

        </div>
    )
}

export default Container