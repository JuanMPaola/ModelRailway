
import { db } from "../../../../firebase"
import { query, collection, onSnapshot } from "firebase/firestore";
import { GET_CATEGORIES } from "../../types";

const getCategories = () => async (dispatch) => {
    try {
        const response =  query(collection(db, "Categorias"));
        await onSnapshot(response, (querySnapshot) =>{
            const categoriesDb = [];
            querySnapshot.forEach((doc) =>{
                
                categoriesDb.push({id: doc.id, ...doc.data()});
            })
            dispatch({
                type: GET_CATEGORIES,
                payload:categoriesDb,
            })
        })
    } catch (error) {
        console.log("error al obtener las categorias", error)
    }
}

export default getCategories;
