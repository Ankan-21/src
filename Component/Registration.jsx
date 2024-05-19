import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Register } from '../../src/ReduxToolkit/AuthSlice'


export default function Registration() {

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    
  })
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const validation = () => {
    let error = {}

    if (!user.first_name) {
      error.first_name = "First Name Is Important"
    }

    if (!user.last_name) {
      error.last_name = "Last Name Is Important"
    }

    if (!user.email) {
      error.email = "Email Is Important"
    }

    if (!user.password) {
      error.password = "Password Is Important"
    }

    return error
  }

  

  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First name is Required" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }

    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name : "Last name is Required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }


    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name : "Last name is Required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }


    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password is Required" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }



  }


  const SubmitInfo = (e) => {
    e.preventDefault()
    setError(validation())
    let formData = new FormData()
    formData.append("first_name", user.first_name)
    formData.append("last_name", user.last_name)
    formData.append("email", user.email)
    formData.append("password", user.password)
    dispatch(Register(formData))
  }

  return (
    <>
      
      <form>

    <div>
      <label>
        First_Name:
        <input type="text"
        value={user.first_name}
        name='first_name'
        onChange={postUserData}
        />
      </label>
      <br />

      <label>
        Last_Name:
        <input type="text"
        value={user.last_name}
        name='last_name'
        onChange={postUserData}
        />
      </label>
      <br />

      <label>
        Email:
        <input type="text"
        value={user.email}
        name='email'
        onChange={postUserData}
        />
      </label>
      <br />

      <label>
        password:
        <input type="password"
        value={user.password}
        name='password'
        onChange={postUserData}
        />
      </label>
      <br />
      <button type='submit' onClick={SubmitInfo} >Submit</button>
    </div>
   </form>     
    </>
  )
}
