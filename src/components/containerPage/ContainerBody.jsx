import { useEffect, useState } from "react";
import axios from "axios";
import ContainerTile from "./ContainerTile.jsx";

export default function ContainerBody(props) {

    const containerId = props.containerId
    const [contentData, setContentData] = useState([])

    const getContents = () => {
        axios.get(`http://localhost:8000/api/contents/${containerId}`)
            .then(res => {
                setContentData(Object.values({ ...res.data }))
            })
    }
    useEffect(
        getContents, []
    )

    return (
        <article className="Home">
            {contentData.map((content) => {
                return (
                    <ContainerTile
                        key={content.contentId}
                        contentId={content.contentId}
                        name={content.contentName}
                    />
                )
            })
            }

        </article>
    )
}