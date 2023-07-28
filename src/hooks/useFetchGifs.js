import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, SetImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async() =>{
        const newImages = await getGift(category)
        SetImages(newImages);
        setIsLoading(false)
    }
    
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}


