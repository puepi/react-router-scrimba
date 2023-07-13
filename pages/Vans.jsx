// import {Link} from 'react-router-dom'
// import {useState,useEffect} from 'react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

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
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} />
                    <div className='van-info'>
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    return(
        <React.Fragment>
            <div className='van-list-container'>
                <h1>Explore our vans options</h1>
                <div className='van-list'>
                    {vansList.length>0 ?vansListElements:<h2>Loading...</h2>}
                </div>
            </div>
        </React.Fragment>
    )
}