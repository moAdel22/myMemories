import * as api from '../api'
import {Fetch_All,CREATE,DELETE,UPDATE,LIKE} from '../constants/actionTypes'


//Action creators
export const getPosts=()=>async (dispatch)=>{
    try {

        const {data}=await api.fetchPosts()
      
        dispatch ({type:Fetch_All,payload:data})
        
    } catch (error) {
        console.log(error.message)
        
    }
     
}
export const createPost=(post)=>async (dispatch)=>{
    try {
        
        const {data}=await api.createPost(post)
       
        dispatch ({type:CREATE,payload:data})
        
    } catch (error) {
        console.log(error.message)
        
    }
     
}

export const updatePost=(id,post)=>async (dispatch)=>{
    try {
        const {data}=await api.updatePost(id,post)

        dispatch ({type:UPDATE,payload:data})
        
    } catch (error) {
        
        console.log(error)
        
    }
     
}
export const deletePost=(id)=>async (dispatch)=>{
    try {
        
        await api.deletePost(id)
        dispatch ({type:DELETE,payload:id})
        
    } catch (error) {
        console.log('here is delete action failure')
        
        console.log(error)
        
    }
     
}
export const likePost=(id,post)=>async (dispatch)=>{
    try {
        const {data}=await api.likePost(id,post)
        dispatch ({type:LIKE,payload:data})
        
    } catch (error) {
        
        console.log(error)
        
    }
     
}


