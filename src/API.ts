import axios from "axios";
import { useEffect, useState } from "react";

const APIComponent = () => {
    const [images, setImages] = useState <any>([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/image")
        .then(res => setImages(res.config.url))
        }, [])
        return images
}

export default APIComponent