/* import { db } from "@/src/firebase";

import { POST_AMIGOS } from "../../types"
import { addDoc, collection } from "firebase/firestore";



const postAmigos = (post) => async (dispatch) =>{
    try {
        await addDoc(collection(db, "Amigos"),{
            description: post.description,
            image: post.image
        })
        dispatch({
            type:POST_AMIGOS,
            payload:post,
        })
    } catch (error) {
        console.log("error al postear Amigos", error)
    }
}

export default postAmigos; */