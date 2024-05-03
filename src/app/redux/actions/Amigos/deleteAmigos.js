/* import { DELETE_AMIGOS } from "../../types";
import { db } from "../../../../firebase"
import { deleteDoc, doc } from "firebase/firestore";

const deleteAmigos = (amigoId) => async (dispatch) =>{
    try {
        
        await deleteDoc(doc(db, "Amigos", amigoId));
        console.log("borrado")

        dispatch({
            type:DELETE_AMIGOS,
            payload: amigoId,
        })
    } catch (error) {
        console.log("error al eliminar la categoria", error)
    }
}

export default deleteAmigos; */