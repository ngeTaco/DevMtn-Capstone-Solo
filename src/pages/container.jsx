import { useLoaderData } from 'react-router-dom'
// Import Components
import Header from '../components/common/Header.jsx'
import ContainerBody from '../components/containerPage/ContainerBody.jsx'


function Container() {
    const { containerId } = useLoaderData()

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