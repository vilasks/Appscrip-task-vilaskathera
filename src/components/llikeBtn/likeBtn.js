'use client'
import { useState } from "react";
import Icon from "../icon/icon";

export default function LikeBtn(){
    const [liked,setLiked] = useState()
    function handleClick(){
        setLiked(!liked)
    }
    return <>
        {liked ? <span onClick={handleClick}><Icon data='/heartRed.svg'  alt='heartRed' /></span> : <span onClick={handleClick}><Icon data='/heart.svg' alt='heart' /></span>}
    </>
}