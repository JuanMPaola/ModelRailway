import { db } from "../../../../firebase"
import { query, collection, onSnapshot } from "firebase/firestore";
import { GET_POSTEOS } from "../../types";

const getPosteos = () => async (dispatch) => {
    try {
        const response =  query(collection(db, "Post"));
        await onSnapshot(response, (querySnapshot) =>{
            const posteosDb = [];
            querySnapshot.forEach((doc) =>{
                
            console.log("LOG :: -->>>>>>", doc.data());
                posteosDb.push({id: doc.id, ...doc.data()});
            })
            console.log("LOG  :: posteosDb ", posteosDb);
            dispatch({
                type: GET_POSTEOS,
                payload:posteosDb,
            })
        })
    } catch (error) {
        console.log("error al obtener los posteos", error)
    }
}

export default getPosteos;