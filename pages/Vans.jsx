// import {Link} from 'react-router-dom'
// import {useState,useEffect} from 'react'
import React from 'react'

export default function Vans(){
    // const [vansList,setVansList]=useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err=>console.log(err))
    }, [])
    return(
        <h1>Vans page goes here! 🚐</h1>
    )
}