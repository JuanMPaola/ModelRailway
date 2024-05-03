/* import { db } from "../../../../firebase"
import { POST_CATEGORIES } from "../../types";
import { collection, addDoc } from "firebase/firestore";

const postCategories = (text) => async (dispatch) =>{
    try {

        await addDoc(collection(db, "Categorias"), {
            title: text
        });
        
        dispatch({
            type: POST_CATEGORIES,
            payload: {
                title: text
            }
        });
    } catch (error) {
        alert("error al postear categoria", error)
    }
}

export default postCategories; */