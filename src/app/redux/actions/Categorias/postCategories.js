import { db } from "../../../../firebase";
import { POST_CATEGORIES } from "../../types";
import { collection, setDoc, doc } from "firebase/firestore";

const postCategories = (text) => async (dispatch) => {
    try {
        // Define el ID del documento como el texto proporcionado
        const documentId = text;

        // Crea una referencia al documento con el ID especificado
        const docRef = doc(collection(db, "Categorias"), documentId);

        // Usa setDoc para crear el documento con el ID especificado y los datos proporcionados
        await setDoc(docRef, {
            title: text
        });

        // Despacha la acción con el ID del documento
        dispatch({
            type: POST_CATEGORIES,
            payload: {
                id: documentId,
                title: text
            }
        });
    } catch (error) {
        alert("Error al postear categoría: ", error.message);
    }
};

export default postCategories;
