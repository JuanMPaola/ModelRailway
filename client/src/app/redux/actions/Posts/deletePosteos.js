import { DELETE_POSTEOS } from "../../types";
import { db } from "../../../../firebase"
import { deleteDoc, doc } from "firebase/firestore";

const deletePosteos = (posteoId) => async (dispatch) =>{

    try {

        await deleteDoc(doc(db, "Post", posteoId));
        console.log("borrado")

        dispatch({
            type: DELETE_POSTEOS,
            payload: posteoId,
        })

    } catch (error) {
        console.log("error al eliminar el post", error)
    }
}

export default deletePosteos;