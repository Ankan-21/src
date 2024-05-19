import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Create1 } from '../../src/ReduxToolkit/CrudSlice'

export default function Create() {
    const [user,setUser]=useState({
        title:'',
        description:'',
    })
    const [image,setImage]=useState()
    const dispatch=useDispatch()
    const [error,setError]=useState("")

    const validation=()=>{
        let error={}
        if(!user.title){
            error.title="Title is Important"
        }

        if(!user.description){
            error.description="Description is Important"
        }
        return error;
    }

    let value,name 
    const postUserData=(e)=>{
        name=e.target.name 
        value=e.target.value 
        if(name === "title"){
            if(value.length === 0){
                setError({...error,title:"Title is Required"})
                setUser({...user,title:""})
            }else{
                setError({...error,title:""})
                setUser({...user,title:value})
            }
        }

        if(name === "description"){
            if(value.length === 0){
                setError({...error,description:"Descripion is Required"})
                setUser({...user,description:""})
            }else{
                setError({...error,description:""})
                setUser({...user,description:value})
            }
        }
    }

    const submitInfo=(e)=>{
        e.preventDefault()
        setError(validation())

        let formData=new FormData()
        formData.append("title",user.title)
        formData.append("description",user.description)
        formData.append("image",image)
        dispatch(Create1(formData))

    }
  return (
   <>
   <form>

    <div>
        <label>
         Title:
         <input type="text" 
         value={user.title}
         name='title'
         onChange={postUserData}
         />
        </label>
        <br />
        <label>
            Description:
            <input type="text"
            value={user.description}
            name='description'
            onChange={postUserData}
            />
        </label>
        <br />
        <label>
            Profile_img:
            <input 
            type="file"
            onChange={(e)=> setImage(e.target.files[0])}
            name='img'
            accept='image/*'
            
            />
           {image !=="" &&  image !==undefined && image !==null ?(
            <img 
            style={{height:"100px"}}
            src={URL.createObjectURL(image)}
             alt="" />
           ):(
            <>{image ==="" && <p>Drag or Drop content here</p> }</>
           )}
            
        </label>
        <br />
        <button type='submit' onClick={submitInfo} >Submit</button>
    </div>
   </form>
   </>
  )
}
