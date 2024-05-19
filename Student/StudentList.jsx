import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Student_list } from '../../src/ReduxToolkit/CrudSlice'

export default function StudentList() {
    const {stu_list}=useSelector((state)=>state?.Crud)
    console.log("student",stu_list)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Student_list())
    },[])
  return (
   <>
   <div className="row">
      {Array.isArray(stu_list) && stu_list.map((item, index) => (
        <div className="col-sm-4" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h5 className="card-title">{item.email}</h5>
              <a href={item.link} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* {Array.isArray(stu_list) && stu_list.map((item)=>{
        return(
            
            <div>
            <h2>{item.name}</h2>
            {console.log("items" ,item.name)}
            <h2>{item._id}</h2>
            </div>
            
            
           
        )
    })} */}
   </>
  )
}
