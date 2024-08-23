import { useLoaderData, useOutletContext } from 'react-router-dom'
import Header from '../components/common/Header.jsx'
import ContainerBody from '../components/containerPage/ContainerBody.jsx'


function Container() {
    const {containerId} = useLoaderData()
    const {setShowContainer} = useOutletContext()

    return (
        <div>

            <Header />
            <ContainerBody
                containerId={containerId}
                setShowContainer={setShowContainer}
            />

        </div>
    )
}

export default Container