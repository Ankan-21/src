import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CateDetails } from '../../src/ReduxToolkit/CrudSlice'

export default function CateDe() {
    const {cateDel}=useSelector((state)=>state?.Crud)
    const {category}=useParams()
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(CateDetails(category))
    },[])
  return (
    <>
    {cateDel.map((item)=>{
        return(
            <>
            <h1>{item.title}</h1>
            </>
        )
    })}
    </>
  )
}
