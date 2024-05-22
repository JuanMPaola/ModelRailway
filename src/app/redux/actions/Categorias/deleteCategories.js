import { DELETE_CATEGORIES } from "../../types";
import { db } from "../../../../firebase"
import { deleteDoc, doc } from "firebase/firestore";

const deleteCategories = (categoryId) => async (dispatch) =>{
    try {
        
        await deleteDoc(doc(db, "Categorias", categoryId));
        console.log("borrado")

        dispatch({
            type:DELETE_CATEGORIES,
            payload: categoryId,
        })
    } catch (error) {
        console.log("error al eliminar la categoria", error)
    }
}

export default deleteCategories;