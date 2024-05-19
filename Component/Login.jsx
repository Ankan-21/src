import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Log } from '../../src/ReduxToolkit/AuthSlice'

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  console.log(error)
  const validation = () => {
    let error = {}

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
    formData.append("email", user.email)
    formData.append("password", user.password)
    dispatch(Log(formData))

  }
  return (
    <form >
      <div>
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

          Password:
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
  )
}
