import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CategoryDet } from '../../src/ReduxToolkit/CrudSlice'

export default function CategoryDetails() {
    const {cate_details}=useSelector((state)=>state?.Crud)
    const {category}=useParams()

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(CategoryDet(category))
    },[])
  return (
   <>
   {cate_details.map((item)=>{
    return(
        <>
        <h1>{item.title}</h1>
        </>
    )
   })}
   </>
  )
}
