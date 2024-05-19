import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Helper/Helper"
import { toast } from "react-toastify"
import axios from "axios"

const initialState={
    cateList:[{}],
    cateDel:[{}],
    cate_name:[{}],
    cate_details:[{}],
    stu_list:[],
    banner_get:[],
    status:"success"

}
export const Create1=createAsyncThunk(
    "/product/create",
    async(formData)=>{
        const res=await axiosInstance.post(`/product/create`,formData)
        const resData=res?.data
        return resData;
    }
)
export const CategoryList=createAsyncThunk(
    "CategoryList",
    async()=>{
        try{
        const res=await axiosInstance.get(`https://dummyjson.com/products/categories`)
         return res?.data
        }catch{
            console.log('error')
        }
    }
)
export const Category=createAsyncThunk(
    "Category",
    async()=>{
        try{
        const res=await axiosInstance.get(`https://dummyjson.com/products/categories`)
         return res?.data
        }catch{
            console.log('error')
        }
    }
)
export const CateDetails=createAsyncThunk(
    "CateDetails",
    async(item)=>{
        try{
        const res=await axiosInstance.get(`https://dummyjson.com/products/category/${item}`)
          return res?.data
        
        }catch(error){
            console.log('error')
        }
    }
)

export const CategoryDet=createAsyncThunk(
    "CategoryDet",
    async(item)=>{
        try{
        const res=await axiosInstance.get(`https://dummyjson.com/products/category/${item}`)
          return res?.data
        
        }catch(error){
            console.log('error')
        }
    }
)


export const Student_list=createAsyncThunk(
    "/student/show",
    async()=>{
        let res=await axiosInstance.get(`https://tureappservar.onrender.com/student/show`)
        let resData=res?.data
        return resData;
    }
)

export const Get_Banner=createAsyncThunk(
    "hgxdfgsbndc",
    async()=>{
        let res=await axios.get(`https://corefitserver.onrender.com/getbanner`)
        let resData=res?.data
        return resData;
    }
)

export const CrudSlice=createSlice({
    name:"create",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder

        .addCase(Create1.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Create1.fulfilled,(state,{payload})=>{
            state.status="idle"
            if(payload.status === 200){
                toast(payload.message)
            }else{
                toast(payload.message)
            }
        })
        .addCase(Create1.rejected,(state,action)=>{
            state.status="idle"
        })


        .addCase(CategoryList.pending,(state)=>{
            state.cateList=null
        })
        .addCase(CategoryList.fulfilled,(state,action)=>{
            state.cateList=action.payload
        })
        .addCase(CategoryList.rejected,(state)=>{
            state.cateList=null
        })


        .addCase(Category.pending,(state)=>{
            state.cate_name=null
        })
        .addCase(Category.fulfilled,(state,action)=>{
              state.cate_name=action.payload
        })
        .addCase(Category.rejected,(state)=>{
            state.cate_name=null
        })

        .addCase(CategoryDet.pending,(state)=>{
            state.cate_name=null
        })
        .addCase(CategoryDet.fulfilled,(state,action)=>{
            state.cate_details=action.payload.products
        })
        .addCase(CategoryDet.rejected,(state)=>{
            state.cate_name=null
        })


        .addCase(CateDetails.pending,(state)=>{
            state.cateList=null
        })
        .addCase(CateDetails.fulfilled,(state,action)=>{
            state.cateDel=action.payload.products
            
        })
        .addCase(CateDetails.rejected,(state)=>{
            state.cateList=null
        })


        .addCase(Student_list.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Student_list.fulfilled,(state,{payload})=>{
            // state.status="idle"
            state.stu_list= payload.data

            // if(payload.status === 200){
            //     state.stu_list=action.data
            // }
        })
        .addCase(Student_list.rejected,(state,action)=>{
            state.status="idle"
        })

        .addCase(Get_Banner.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(Get_Banner.fulfilled,(state,{payload})=>{
            state.banner_get=payload.data
        })
        .addCase(Get_Banner.rejected,(state,action)=>{
            state.status="idle"
        })
      
        
    }
})
export const{}=CrudSlice.actions;