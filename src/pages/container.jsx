import { useLoaderData } from 'react-router-dom'
import Header from '../components/common/Header.jsx'
import ContainerBody from '../components/containerPage/ContainerBody.jsx'


function Container() {
    const containerId = useLoaderData().containerId
    console.log("containerId", containerId)

    return (
        <div>

            <Header />
            <ContainerBody
                containerId={containerId}
            />

        </div>
    )
}

export default Container