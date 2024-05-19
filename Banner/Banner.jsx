import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Banner } from '../../src/ReduxToolkit/CrudSlice'

export default function Banner() {
    const {banner_get}=useSelector((state)=>state?.Crud)


    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(Get_Banner())
    },[])
  return (
   <>
   <div className="row">
      {Array.isArray(banner_get) && banner_get.map((item, index) => (
        <div className="col-sm-4" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              {/* <h5 className="card-title">{item.email}</h5> */}
              <a href={item.link} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
    </div>
   </>
  )
}
