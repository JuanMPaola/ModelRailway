import { db } from "../../../../firebase"
import { doc, getDoc } from "firebase/firestore";

import { GET_BYID } from "../../types";

const getById = (id) => async (dispatch) => {
    try {
        const docRef = doc(db, "Post", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            dispatch({
                type: GET_BYID,
                payload: docSnap.data(),
            })
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }

    } catch (error) {
        console.log("error al obtener los posteos", error)
    }
}

export default getById;