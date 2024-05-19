import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify"
import axios, { AxiosHeaders } from "axios";


const initialState={

    profileData:[{}]

}

export const Register=createAsyncThunk(
    '/user/signup',
    async (formData)=>{

        let res=await axiosInstance.post(`/user/signup`,formData)

        let restData=res?.data
        return restData;
    }
)

export const Getbanner1=createAsyncThunk(
    "trfhgjbkn",
    async (data)=>{
        let res=await axios.post(`https://tureappservar.onrender.com/student/create`,data)
        let resData=res?.data
        return resData;
    }
)


export const Log=createAsyncThunk(
    '/user/signin',
    async (formData)=>{

        let res=await axiosInstance.post(`/user/signin`,formData)

        let restData=res?.data
        return restData;
    }
)

export const Profile1=createAsyncThunk(
    "/user/profile-details",
    async()=>{
        const res=await axiosInstance.get(`/user/profile-details`)
        const resData=res?.data
        return resData;
    }
)

export const AuthSlice=createSlice({
    name:"registration",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder

        .addCase(Register.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Register.fulfilled,(state,{payload})=>{
            state.status="idle"
            if(payload.status === 200){
                toast(payload.message)
            }else{
                toast(payload.message)
            }
        })
        .addCase(Register.rejected, (state, action) => {
            state.status = "idle";

        })


        .addCase(Log.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Log.fulfilled,(state,{payload})=>{
            state.status="idle"
            if (payload.status === 200) {
                localStorage.setItem("token", payload.token)
            }
        })
        .addCase(Log.rejected, (state, action) => {
            state.status = "idle";

        })

        .addCase(Profile1.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Profile1.fulfilled,(state,{payload})=>{
            state.status="idle"
            if(payload.status === 200){
            state.profileData=payload
            }
        })
        .addCase(Profile1.rejected,(state,action)=>{
            state.status="idle"
        })

        .addCase(Getbanner1.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Getbanner1.fulfilled,(state,{payload})=>{
              state.status="idle"
           if(payload.status === 200){
            toast(payload.message)
           }else{
            toast(payload.message)
           }
        })
        .addCase(Getbanner1.rejected,(state,action)=>{
            state.status="idle"
        })

    }
})