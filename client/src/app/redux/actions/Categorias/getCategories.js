
import { db } from "../../../../firebase"
import { query, collection, onSnapshot } from "firebase/firestore";
import { GET_CATEGORIES } from "../../types";

const getCategories = () => async (dispatch) => {
    try {
        console.log("LOG :: INGRESA AL GET");
        const response =  query(collection(db, "Categorias"));
        await onSnapshot(response, (querySnapshot) =>{
            const categoriesDb = [];
            querySnapshot.forEach((doc) =>{
                
            console.log("LOG :: -->>>>>>", doc.data());
                categoriesDb.push({id: doc.id, ...doc.data()});
            })
            console.log("LOG  :: categoriesDb ", categoriesDb);
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
