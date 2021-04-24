import {Fetch_All,CREATE,DELETE,UPDATE,LIKE} from '../constants/actionTypes'

const reducer=(posts=[],action)=>{

    switch (action.type) {
        case Fetch_All:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        case UPDATE:

            return posts.map((post)=> post._id===action.payload._id?action.payload:post)

        case DELETE:
        

            return posts.filter((post)=>post._id!==action.payload)
        
        case LIKE:
            return posts.map((post)=> post._id===action.payload._id?action.payload:post)


            
        default:
            return posts
    }
}

export default reducer