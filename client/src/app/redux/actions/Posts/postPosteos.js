import { db } from "../../../../firebase"

import { collection, addDoc } from "firebase/firestore";
import { POST_POSTS } from "../../types";

const postPosts = (post) => async (dispatch) =>{
    try {
        await addDoc(collection(db, "Post"), {
            available: post.available,
            categories: post.categories,
            description: post.description,
            image: post.image,
            title: post.title,
        })

        dispatch({
            type: POST_POSTS,
            payload:post,
        })
    } catch (error) {
        alert("error al postear posteo", error)
    }
}

export default postPosts;