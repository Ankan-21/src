import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Category } from '../../src/ReduxToolkit/CrudSlice'
import { Link } from 'react-router-dom'

export default function CategoryList() {
    const {cate_name}=useSelector((state)=>state?.Crud)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Category())
    },[])
  return (
   <>
    {cate_name?.map((item) => {
                return (
                    <>
                        <li>
                            {item}
                            <Link to={`/categorydetails/${item}`}>Button</Link>
                        </li>
                    </>
                )
            })}

   </>
  )
}
