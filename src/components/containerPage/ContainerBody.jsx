import { useEffect, useState } from "react";
import axios from "axios";
import ContainerTile from "./ContainerTile.jsx";
import ContainerHeader from "./ContainerHeader.jsx";

export default function ContainerBody(props) {

    const { containerId } = props
    const [contentData, setContentData] = useState([])

    // Get and Set Contents for the current Container
    const getContents = () => {
        axios.get(`http://localhost:8000/api/contents/${containerId}`)
            .then(res => {
                setContentData(Object.values({ ...res.data }))
            })
    }
    useEffect(() => {
        getContents()
    }
        , [])

    // Delete the selected Content
    const deleteContent = (contentId) => {
        axios.delete(`/api/content/${contentId}`)
            .then(res => {
                getContents()
            })
    }

    // Create new Content in the Container
    const newContent = (containerId) => {
        axios.post('/api/content', { containerId })
            .then(() => {
                getContents()
            })
    }

    return (
        <article className="Home">
            <ContainerHeader
                containerId={containerId}
                newContent={newContent}
            />
            {contentData.map((content) => {
                return (
                    <ContainerTile
                        key={content.contentId}
                        contentId={content.contentId}
                        name={content.contentName}
                        deleteContent={deleteContent}
                    />
                )
            })
            }

        </article>
    )
}