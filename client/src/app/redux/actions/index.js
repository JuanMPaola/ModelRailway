import { db } from "../../../firebase"
import { query, onSnapshot, collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const POST_CATEGORIES = "POST_CATEGORIES";
export const DELETE_CATEGORIES = "DELETE_CATEGORIES";

export const getCategories = () => async (dispatch) => {
    try {
        const response = query(collection(db, "Categorias"));

        onSnapshot(response, (querySnapshot) =>{
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

/* export const postCategories = (text) => async (dispatch) =>{
    try {
        await addDoc(collection(db, "Categorias"), {
            Title: text,
        })

        dispatch({
            type:POST_CATEGORIES,
            payload:text
        })
    } catch (error) {
        alert("error al postear categoria", error)
    }
} */
export const postCategories = (text) => async (dispatch) =>{
    try {
        
        await addDoc(collection(db, "Categorias"), {
            Title: text
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

export const deleteCategories = (categoryId) => async (dispatch) =>{
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