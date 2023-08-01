"use client";
import { useEffect, useState } from "react";

const useProjectCard =()=>{
    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 10000))
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k'))
    }, []);
    return {randomLikes,randomViews}
}
export {useProjectCard}