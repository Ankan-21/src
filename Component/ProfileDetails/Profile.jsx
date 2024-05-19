import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile1 } from '../../ReduxToolkit/AuthSlice'

export default function Profile() {
    const {profileData}=useSelector((state)=>state?.Auth)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(Profile1())
    },[dispatch])
  return (
    <>
    {profileData.first_name} <br />
    {profileData.last_name} <br />
    {profileData.email} 
    </>
  )
}
