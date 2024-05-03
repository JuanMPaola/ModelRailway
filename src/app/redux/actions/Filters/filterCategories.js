import { FILTER_CATEGORIES } from "../../types";

const filterCategories = (category) => (dispatch) =>{
    try {
        console.log(`Filtro seleccionado: ${category}`);
        dispatch({
            type:FILTER_CATEGORIES,
            payload:category
        })
    } catch (error) {
        console.log("error al filtrar", error)
    }
}

export default filterCategories;