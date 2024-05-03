import { db } from "../../../../firebase"
import { query, collection, onSnapshot } from "firebase/firestore";
import { GET_MARCAS } from "../../types";

const getMarcas = () => async (dispatch) => {
    try {
        const response =  query(collection(db, "Marcas"));
        await onSnapshot(response, (querySnapshot) =>{
            const marcasDb = [];
            querySnapshot.forEach((doc) =>{
                
                marcasDb.push({id: doc.id, ...doc.data()});
            })
            dispatch({
                type: GET_MARCAS,
                payload:marcasDb,
            })
        })
    } catch (error) {
        console.log("error al obtener las marcas", error)
    }
}

export default getMarcas;
