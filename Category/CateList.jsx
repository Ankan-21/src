import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CategoryList } from '../../src/ReduxToolkit/CrudSlice'


export default function CateList() {
    const {cateList}=useSelector((state)=>state?.Crud)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(CategoryList())
    },[])
  return (
   <>
   jj
   {cateList?.map((item,index)=>{
    return(
        <>
        
        <li>
            {item}
            <Link to={`/categorydetails/${item}`} >Button</Link>

        </li>
        </>
    )
   })}
   </>
  )
}
