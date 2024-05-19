import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Getbanner1 } from '../../src/ReduxToolkit/AuthSlice'


export default function Getbanner() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    state: "",
    section: "",
    classes: "",

  })
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const validation = () => {
    let error = {}

    if (!user.name) {
      error.name = " Name Is Important"
    }
    if (!user.email) {
      error.email = "Email Is Important"
    }
    if (!user.phone) {
      error.phone = "Phone Is Important"
    }
    if (!user.city) {
      error.city = "City Is Important"
    }

    if (!user.address) {
      error.address = "Address Is Important"
    }
    if (!user.state) {
      error.state = "State Is Important"
    }
    if (!user.section) {
      error.section = "Section Is Important"
    }
    if (!user.classes) {
      error.classes = "Clesses Is Important"
    }

    return error
  }



  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "First name is Required" });
        setUser({ ...user, name: "" });
      } else {
        setError({ ...error, name: "" });
        setUser({ ...user, name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: " Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "phone is Required" });
        setUser({ ...user, phone: "" });
      } else {
        setError({ ...error, phone: "" });
        setUser({ ...user, phone: value });
      }
    }

    if (name === "city") {
      if (value.length === 0) {
        setError({ ...error, city: "City is Required" });
        setUser({ ...user, city: "" });
      } else {
        setError({ ...error, city: "" });
        setUser({ ...user, city: value });
      }
    }

    if (name === "address") {
      if (value.length === 0) {
        setError({ ...error, address: "Address is Required" });
        setUser({ ...user, address: "" });
      } else {
        setError({ ...error, address: "" });
        setUser({ ...user, address: value });
      }
    }

    if (name === "state") {
      if (value.length === 0) {
        setError({ ...error, state: "State is Required" });
        setUser({ ...user, state: "" });
      } else {
        setError({ ...error, state: "" });
        setUser({ ...user, state: value });
      }
    }


    if (name === "section") {
      if (value.length === 0) {
        setError({ ...error, section: "Section is Required" });
        setUser({ ...user, section: "" });
      } else {
        setError({ ...error, section: "" });
        setUser({ ...user, section: value });
      }
    }


    if (name === "classes") {
      if (value.length === 0) {
        setError({ ...error, classes: "Classes is Required" });
        setUser({ ...user, classes: "" });
      } else {
        setError({ ...error, classes: "" });
        setUser({ ...user, classes: value });
      }
    }

  }


  const SubmitInfo = (e) => {
    e.preventDefault()
    setError(validation())

    // let formData = new FormData()
    // formData.append("name", user.name)
    // formData.append("email", user.email)
    // formData.append("phone", user.phone)
    // formData.append("city", user.city)
    // formData.append("address", user.address)
    // formData.append("state", user.state)
    // formData.append("section", user.section)
    // formData.append("classes", user.classes)
    // dispatch(Getbanner1(formData))

    const data={
    
      "name": user.name ,
      "email": user.email,
      "phone": user.phone ,
      "city": user.city ,
      "address": user.address ,
      "state": user.state,
      "section": user.section ,
      "classes": user.classes

    }
    dispatch(Getbanner1(data))
  }

  return (
    <>

      <form>

        <div>
          <label>
            Name:
            <input type="text"
              value={user.name}
              name='name'
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
            Phone:
            <input type="number"
              value={user.phone}
              name='phone'
              onChange={postUserData}
            />
          </label>
          <br />

          <label>
            city:
            <input type="text"
              value={user.city}
              name='city'
              onChange={postUserData}
            />
          </label>
          <br />

          <label>
            Address:
            <input type="text"
              value={user.address}
              name='address'
              onChange={postUserData}
            />
          </label>
          <br />
          <label>
            State:
            <input type="text"
              value={user.state}
              name='state'
              onChange={postUserData}
            />
          </label>
          <br />

          <label>
            Section:
            <input type="text"
              value={user.section}
              name='section'
              onChange={postUserData}
            />
          </label>
          <br />

          <label>
            Clesses:
            <input type="text"
              value={user.classes}
              name='classes'
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
