import { app, db } from "../../../firebase"
import { getDocs, query, onSnapshot, collection, addDoc } from "firebase/firestore";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const POST_CATEGORIES = "POST_CATEGORIES";

export const getCategories = () => async (dispatch) => {
    try {
        const response = query(collection(db, "Categorias"));
        onSnapshot(response, (querySnapshot) =>{
            const categoriesDb = [];
            querySnapshot.forEach((doc) =>{
                categoriesDb.push(doc.data());
            })
            console.log("el array ", categoriesDb)
            dispatch({
                type: GET_CATEGORIES,
                payload:categoriesDb,
            })
        })
            
    } catch (error) {
        console.log("error al obtener las categorias", error)
    }
}

export const postCategories = (text) => async (dispatch) =>{
    try {
        await addDoc(collection(db, "Categorias"), {
            Title: text
        })
        dispatch({
            type:POST_CATEGORIES,
            payload:text
        })
    } catch (error) {
        alert("error al postear categoria", error)
    }
}