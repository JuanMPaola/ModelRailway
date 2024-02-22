import { app, db } from "../../../firebase"
import { getDocs } from "firebase/firestore";

export const GET_CATEGORIES = "GET_CATEGORIES"

export const getCategories = () => async (dispatch) =>{
    try {
        const categories = [];
        const querySnapshot = await getDocs(collection(db, "Categorias"));
        querySnapshot.forEach((item) =>{
            categories.push(item.data());
        })
        
        dispatch({
            type: GET_CATEGORIES,
            payload:categories,
        })
        
    } catch (error) {
        console.log("error al obtener las categorias", error)
    }
}


/*   useEffect(async ()=>{
    const querySnapshot = await getDocs(collection(db, "Categorias"));
    const categories = [];
    querySnapshot.forEach((item) =>{
      console.log(item.data());
    })

    return () => datos();
  }, [])*/