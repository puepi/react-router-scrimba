// import {Link} from 'react-router-dom'
// import {useState,useEffect} from 'react'
import React,{useState} from 'react'

export default function Vans(){
    const [vansList,setVansList]=useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansList(data.vans))
            .catch(err=>console.log(err))
    }, [])

    const vansListElements=vansList.map(van=>{
        return(
            <div key={van.id} className='van-tile'>
                <img src={van.imageUrl} />
                <div className='van-info'>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        )
    })

    return(
        <React.Fragment>
            <div className='van-list-container'>
                <div className='van-list'>
                    {vansListElements}
                </div>
            </div>
        </React.Fragment>
    )
}