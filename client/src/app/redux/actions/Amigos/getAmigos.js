import { db } from "@/src/firebase"
import { query, collection, onSnapshot } from "firebase/firestore"
import { GET_AMIGOS } from "../../types";

const getAmigos = () => async (dispatch) =>{
    try {
        const response = query(collection(db, "Amigos"));
        await onSnapshot(response, (QuerySnapshot) =>{
            const amigosDb = [];
            QuerySnapshot.forEach((doc) =>{
                amigosDb.push({id:doc.id, ...doc.data()})
            })
            dispatch({
                type: GET_AMIGOS,
                payload:amigosDb,
            })
        })
    } catch (error) {
        console.log("error al obtener amigos", error)
    }
}

export default getAmigos;